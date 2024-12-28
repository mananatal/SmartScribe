'use client'
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { ArrowLeft, NotebookPen } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function WorkspaceHeader({fileName}) {
    return (
        <div className="shadow-md px-28 py-3 flex justify-between items-center ">
            <div className="flex items-center gap-4">
                <Link href="/dashboard">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                </Link>
                <Link href="#" className="flex items-center gap-2">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                        <NotebookPen className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-bold text-xl">SmartScribe</span>
                    </div>
                </Link>
            </div>
            <div>
                <h1 className='text-2xl font-bold '>{fileName}</h1>
            </div>
            <div className="flex items-center gap-4">
                <UserButton />
            </div>
        </div>
    );
}

export default WorkspaceHeader