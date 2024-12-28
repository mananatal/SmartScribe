
import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { action } from "./_generated/server.js";
import { v } from "convex/values";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { geminiApiKey } from "@/app/dashboard/__components/gemenikey.js";



export const ingest = action({
  args: {
    fileId:v.string(),
    splittedText:v.array(v.string())
  },
  handler: async (ctx,args) => {
    console.log("APITKEY: ",geminiApiKey)
    await ConvexVectorStore.fromTexts(
      args.splittedText,
      {fileId:args.fileId},
      new GoogleGenerativeAIEmbeddings({
        model: "text-embedding-004", // 768 dimensions
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
        apiKey:process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
      }),
      { ctx }
    );
  },
});

export const search = action({
    args: {
      query: v.string(),
      fileId:v.string(),
    },
    handler: async (ctx, args) => {
      const vectorStore = new ConvexVectorStore(new GoogleGenerativeAIEmbeddings({
            model: "text-embedding-004", // 768 dimensions
            taskType: TaskType.RETRIEVAL_DOCUMENT,
            title: "Document title",
            apiKey:process.env.NEXT_PUBLIC_GOOGLE_API_KEY
      }), { ctx });
  
      const resultOne = await vectorStore.similaritySearch(args.query, 1);
      console.log(resultOne);
    },
});