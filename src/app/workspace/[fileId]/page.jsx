'use client'
import React from 'react'
import TextEditor from '../_components/TextEditor'
import PdfViewer from '../_components/PdfViewer'
import WorkspaceHeader from '../_components/WorkspaceHeader'
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api'
import { useParams } from 'next/navigation'

function WorkspacePage({params}) {

    const {fileId}=useParams() 
    const fileInfo=useQuery(api.fileStorage.getFileInfo,{fileId});

  return (
    <div>
        <WorkspaceHeader fileName={fileInfo && fileInfo[0].fileName}/>
        <div className='grid grid-cols-2 gap-2'>
            <div>
                <TextEditor fileId={fileId}/>
            </div>
            <div>
                <PdfViewer fileUrl={fileInfo && fileInfo[0].fileUrl}/>
            </div>
        </div>
    </div>
  )
}

export default WorkspacePage