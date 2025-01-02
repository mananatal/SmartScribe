'use client'
import React, {  useEffect, useRef, useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Loader2Icon } from 'lucide-react'
import { useAction, useMutation } from "convex/react";
import { api } from '../../../../convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import { useRouter } from 'next/navigation'


function UploadPdf({ children,isUploadLimitReached }) {

    const [loading,setLoading]=useState(false);
    const [fileName,setFileName]=useState("");
    const [file,setFile]=useState(null);
    const inputRef=useRef(null);
    const [open,setOpen]=useState(false);

    const router=useRouter();

    const {user}=useUser();

    const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl);
    const getFileUrl=useMutation(api.fileStorage.getFileUrl);
    const uploadFileToDb=useMutation(api.fileStorage.uploadFileToDb);
    const embedDocument=useAction(api.myActions.ingest);


    const onFileSelect=()=>{
        const file=inputRef.current.files[0];
        if(file){
            setFileName(file.name.split('.')[0]);
            setFile(file);
        }
    }   

    const onDialogClose=()=>{
        setFile(null);
        setFileName("");
    }

    useEffect(()=>{
        onDialogClose();
    },[open])


    const onUpload=async ()=>{
        setLoading(true);
        try {
            // Step 1: Get a short-lived upload URL
            const postUrl = await generateUploadUrl();
            // Step 2: POST the file to the URL
            const result = await fetch(postUrl, {
              method: "POST",
              headers: { "Content-Type": file.type },
              body: file,
            });
            const { storageId } = await result.json();
            // Step 3: Save the newly allocated storage id to the database
            const fileUrl=await getFileUrl({storageId});
            const fileId=uuidv4()
            await uploadFileToDb({
                fileId,
                fileName:fileName==""?"Untitled":fileName,
                storageId,
                fileUrl,
                createdBy:user?.primaryEmailAddress?.emailAddress,
            });

            const response = await axios.get("/api/pdf-loader?pdfUrl=" + fileUrl);

            if(!response){
                throw new Error("Error while fetching splitted text");
            }

            await embedDocument({
                fileId,
                splittedText:response?.data.result
            });
            
            setOpen(false);
            setFile(null);
            setFileName("");
            router.push(`/workspace/${fileId}`);
        } catch (error) {
            console.log("Error while uploading pdf file: ",error)
        }
        finally{
            setLoading(false);
        }

    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger disabled={isUploadLimitReached} asChild>{children}</DialogTrigger>
            <DialogContent >
                <DialogHeader>
                    <DialogTitle className="text-base sm:text-lg md:text-xl" >Upload PDF</DialogTitle>
                    <div className="flex flex-col gap-3 sm:gap-4 mt-2">
                        <h2 className="text-sm sm:text-base">Select a file to upload</h2>
                        <div className="w-full">
                            <input
                                type="file"
                                ref={inputRef}
                                accept="application/pdf"
                                onChange={onFileSelect}
                                className="w-full text-xs sm:text-sm md:text-base file:mr-2 sm:file:mr-4 file:py-1.5 sm:file:py-2 file:px-3 sm:file:px-4 file:rounded-full file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                            <Label htmlFor="filename" className="text-sm sm:text-base">
                                File Name
                            </Label>
                            <Input
                                id="filename"
                                placeholder="File Name"
                                value={fileName}
                                onChange={(e) => setFileName(e.target.value)}
                                className="text-sm sm:text-base h-8 sm:h-10"
                            />
                        </div>
                        <div className="flex gap-2 justify-end mt-1 sm:mt-2">
                            <DialogClose asChild>
                                <Button
                                    variant="outline"
                                    className="text-xs sm:text-sm px-2 sm:px-3 py-1 h-7 sm:h-8"
                                    
                                >
                                    Close
                                </Button>
                            </DialogClose>
                            <Button
                                onClick={onUpload}
                                disabled={loading }
                                className="bg-blue-500 hover:bg-blue-400 text-xs sm:text-sm px-2 sm:px-3 py-1 h-7 sm:h-8"
                            >
                                {loading ? (
                                    <Loader2Icon className="animate-spin h-3 w-3 sm:h-4 sm:w-4" />
                                ) : (
                                    "Upload"
                                )}
                            </Button>
                        </div>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default UploadPdf