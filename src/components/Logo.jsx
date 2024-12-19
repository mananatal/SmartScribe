import { ArrowLeft, NotebookPen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

function Logo() {
  return (
    <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center ">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                <NotebookPen className="h-6 w-6 text-blue-600" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-bold text-xl">SmartScribe</span>
            </div>
        </Link>
    </div>
  )
}

export default Logo