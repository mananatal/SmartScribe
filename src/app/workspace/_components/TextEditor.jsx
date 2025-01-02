import React, { useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import EditorElements from './EditorElements'
import Highlight from '@tiptap/extension-highlight'
import { useMutation, useQuery } from 'convex/react'
import { api } from '../../../../convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import { TooltipProvider } from '@/components/ui/tooltip'

function TextEditor({fileId}) {

    const savedNotes=useQuery(api.notes.getNotes,{fileId});
    const saveNotes=useMutation(api.notes.saveNotes);
    const {user}=useUser();

    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                Placeholder: 'Write something …',
            }),
            Highlight,
        ],
        editorProps: {
            attributes: {
                class: 'focus:outline-none h-screen p-5 w-full scrollbar-hide overflow-y-auto',
            },
        },
    });

    useEffect(() => {
        editor?.commands.setContent(savedNotes);
    }, [editor && savedNotes]);

    useEffect(() => {
        if (!user) {
            return;
        }
        const saveData = setTimeout(() => {
            saveNotes({
                fileId,
                notes: editor?.getHTML(),
                createdBy: user?.primaryEmailAddress?.emailAddress
            });
        }, 900);

        return () => clearTimeout(saveData);

    }, [editor && editor.getText()]);
   
    if(!editor){
        return null;
    }
    

    return (
        <div className="scrollbar-hide">
            <div>
                <TooltipProvider>
                    <EditorElements editor={editor} />
                </TooltipProvider>
            </div>
            <div className="h-[88vh] overflow-y-auto scrollbar-hide">
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}

export default TextEditor