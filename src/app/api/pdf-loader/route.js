import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export async function GET(req){

    const url = req?.nextUrl?.searchParams.get('pdfUrl');

    //step1:loading
    const response = await fetch(url);
    const data=await response.blob();
    const loader = new WebPDFLoader(data ,{
        splitPages: false,
    });
    const docs = await loader.load();
    
    let pdfTextContent="";
    docs.forEach((doc)=>{
        pdfTextContent+=doc.pageContent
    });

    // step2: splitting
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200,
    });

    const output = await splitter.splitText(pdfTextContent);
  
    return NextResponse.json({result:output});
}