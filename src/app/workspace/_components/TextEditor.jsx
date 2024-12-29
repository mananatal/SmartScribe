import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import EditorElements from './EditorElements'
import Highlight from '@tiptap/extension-highlight'

function TextEditor() {

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

    if(!editor){
        return null;
    }

    return (
        <div className="scrollbar-hide">
            <div>
                <EditorElements editor={editor} />
            </div>
            <div className="h-[88vh] overflow-y-auto scrollbar-hide">
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}

export default TextEditor