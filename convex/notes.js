import { mutation, query } from "./_generated/server";
import { v } from "convex/values";


export const saveNotes=mutation({
    args:{
        fileId:v.string(),
        notes:v.string(),
        createdBy:v.string(),
    },
    handler:async (ctx,args)=>{
        const result=await ctx.db.query("notes")
        .filter((q)=>q.eq(q.field("fileId"),args.fileId))
        .collect();

        if(!result.length){
            await ctx.db.insert("notes", { 
                fileId:args.fileId,
                notes:args.notes,
                createdBy:args.createdBy,
            }
        );
        }
        else{
            await ctx.db.patch(result[0]._id, {
                notes: args.notes,
            });
        }
    }
})


export const getNotes=query({
    args:{
        fileId:v.string()
    },
    handler:async (ctx,args)=>{
        const result = await ctx.db.query("notes")
        .filter((q) => q.eq(q.field("fileId"), args.fileId))
        .collect();

        return result[0]?.notes;
    }
})