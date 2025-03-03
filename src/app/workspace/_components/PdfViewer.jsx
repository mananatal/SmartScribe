"use client"
import React from 'react'
import { Loader2Icon } from 'lucide-react';

function PdfViewer({fileUrl}) {
  return (
    <div >
      {fileUrl === undefined ? (
        <div className="flex  justify-center items-center h-screen sm:w-full">
          <Loader2Icon className="animate-spin " />
        </div>
      ) : (
        <iframe
          src={fileUrl + "#toolbar=0"}
          width={"100%"}
          className="h-screen"
        />
      )}
    </div>
  )
}

export default PdfViewer