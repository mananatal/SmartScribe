"use client"
import { useQuery } from 'convex/react'
import React from 'react'
import { api } from '../../../../convex/_generated/api'
import { Loader2Icon } from 'lucide-react';

function PdfViewer({fileUrl}) {
  return (
    <div>
      {fileUrl === undefined ? (
        <div className="flex justify-center items-center h-screen">
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