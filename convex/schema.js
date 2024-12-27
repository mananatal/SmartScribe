import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
    users: defineTable({
      userName: v.string(),
      email:v.string(),
      imageUrl:v.string()      
    }),

    pdfFiles:defineTable({
      fileId:v.string(),
      fileName:v.string(),
      storageId:v.id("_storage"),
      fileUrl:v.string(),
      createdBy:v.string()
    }),

});