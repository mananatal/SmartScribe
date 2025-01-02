
import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { action } from "./_generated/server.js";
import { v } from "convex/values";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";


export const ingest = action({
  args: {
    fileId:v.string(),
    splittedText:v.array(v.string())
  },
  handler: async (ctx,args) => {
    await ConvexVectorStore.fromTexts(
      args.splittedText,
      {fileId:args.fileId},
      new GoogleGenerativeAIEmbeddings({
        model: "text-embedding-004", // 768 dimensions
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
        apiKey:process.env.GOOGLE_API_KEY,
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
      const apiKey = process.env.GOOGLE_API_KEY;
      const vectorStore = new ConvexVectorStore(new GoogleGenerativeAIEmbeddings({
            model: "text-embedding-004", // 768 dimensions
            taskType: TaskType.RETRIEVAL_DOCUMENT,
            title: "Document title",
            apiKey:process.env.GOOGLE_API_KEY,
      }), { ctx });

      const resultOne =  (await vectorStore.similaritySearch(args.query, 1)).filter((q) => q.metadata.fileId == args.fileId);
      return JSON.stringify(resultOne);
    },
});