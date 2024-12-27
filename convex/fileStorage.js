import { mutation } from "./_generated/server";
import { v } from "convex/values";


export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});


export const uploadFileToDb = mutation({
    args: {
        fileId:v.string(),
        fileName:v.string(),
        storageId:v.id("_storage"),
        fileUrl:v.string(),
        createdBy:v.string()
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("pdfFiles", {
            createdBy:args.createdBy,
            fileId:args.fileId,
            fileName:args.fileName,
            fileUrl:args.fileUrl,
            storageId:args.storageId
        });

        return "File uploaded to Db Successfully"
    },
});

export const getFileUrl=mutation({
    args: {
        storageId:v.id("_storage"),
    },
    handler: async (ctx, args) => {
        const { storageId}=args;
        const url = await ctx.storage.getUrl(storageId);
        return url;
    },
});