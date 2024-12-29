import React from 'react'
import {
    Bold,
    Code,
    Heading1,
    Heading2,
    Heading3,
    Highlighter,
    Italic,
    List,
    Sparkles,
    Strikethrough,
  } from "lucide-react";
import { useAction } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { useParams } from 'next/navigation';
import { chatSession } from '@/config/gemeni';
import { toast } from "sonner"

function EditorElements({editor}) {
    if (!editor) {
        return null;
    }

    const searchVectors=useAction(api.myActions.search);
    const {fileId}=useParams(); 

    const onAIAssist=async ()=>{
        toast("Please wait while AI is generating response");

        //GET SELECTED TEXT
        const { view, state } = editor
        const { from, to } = view.state.selection
        const text = state.doc.textBetween(from, to, '');

        //convert selected text into vectors
        const vectors=await searchVectors({
            fileId,
            query:text
        });

        const jsonResp= JSON.parse(vectors);
        let context="";
        jsonResp &&
        jsonResp.forEach((d) => {
            context += d.pageContent;
        });

        const prompt=`For given question: ${text} format the content: ${context} like an answer to the question in points and use bullets if necessary, give proper length answer based on the content provided Note: please give output in html format and give body section only also keep the answer to the point dont go out of the question's context`;

        const answer = await chatSession.sendMessage(prompt);
        
        const editorText=editor.getHTML();
        const ans=answer.response.text().replace('```html','').replace('```','');
        console.log(ans)
        editor.commands.setContent(editorText + "<strong>Answer:</strong>" + ans);
    }


   
    
    return (
        <div className="control-group p-2 sm:p-5">
            <div className="button-group flex flex-wrap gap-2 sm:gap-4 items-center justify-start">
                <button                     
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 1 }).run()
                    }
                    className={`p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors ${editor.isActive("heading", { level: 1 }) ? "is-active text-blue-500" : ""
                        }`}
                >
                    <Heading1 className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 2 }).run()
                    }
                    className={`p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors ${editor.isActive("heading", { level: 2 }) ? "is-active text-blue-500" : ""
                        }`}
                >
                    <Heading2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 3 }).run()
                    }
                    className={`p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors ${editor.isActive("heading", { level: 3 }) ? "is-active text-blue-500" : ""
                        }`}
                >
                    <Heading3 className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors ${editor.isActive("bold") ? "is-active text-blue-500" : ""
                        }`}
                >
                    <Bold className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors ${editor.isActive("italic") ? "is-active text-blue-500" : ""
                        }`}
                >
                    <Italic className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={`p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors ${editor.isActive("strike") ? "is-active text-blue-500" : ""
                        }`}
                >
                    <Strikethrough className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHighlight().run()}
                    className={`p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors ${editor.isActive("highlight") ? "is-active text-blue-500" : ""
                        }`}
                >
                    <Highlighter className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors ${editor.isActive("bulletList") ? "is-active text-blue-500" : ""
                        }`}
                >
                    <List className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={`p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors ${editor.isActive("codeBlock") ? "is-active text-blue-500" : ""
                        }`}
                >
                    <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                    className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors hover:text-blue-500"
                    onClick={onAIAssist}
                >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>
        </div>
    )
}

export default EditorElements