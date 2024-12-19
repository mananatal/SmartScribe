import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser=mutation({
    args:{
        userName: v.string(),
        email:v.string(),
        imageUrl:v.string()  
    },
    handler:async (ctx, args) => {

        const user=await ctx.db.query("users")
        .filter((q)=>q.eq(q.field("email"),args.email))
        .collect();

        if(user.length==0){
            await ctx.db.insert("users", { 
                    email:args.email,
                    imageUrl:args.imageUrl,
                    userName:args.userName 
                }
            );

            return "User Inserted Successfully"
        }
        return "User already exists"
    },
})