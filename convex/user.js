import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createUser=mutation({
    args:{
        userName: v.string(),
        email:v.string(),
        imageUrl:v.string(),
    },
    handler:async (ctx, args) => {

        const user=await ctx.db.query("users")
        .filter((q)=>q.eq(q.field("email"),args.email))
        .collect();

        if(user.length==0){
            await ctx.db.insert("users", { 
                    email:args.email,
                    imageUrl:args.imageUrl,
                    userName:args.userName,
                    isPrime:false
                }
            );

            return "User Inserted Successfully"
        }
        return "User already exists"
    },
});

export const upgradeUserPlan=mutation({
    args:{
        email:v.string(),
    },
    handler:async (ctx, args) => {

        const existingUser = await ctx.db
          .query("users")
          .filter((q) => q.eq(q.field("email"), args.email))
          .unique();

        if (!existingUser) {
          return "user not found";
        }

        await ctx.db.patch(existingUser._id, {
          isPrime:true,
        });
        
    },
});

export const fetchUserPlan = query({
    args: {
      email: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
      const userData = await ctx.db
        .query("users")
        .filter((q) => q.eq(q.field("email"), args.email))
        .unique();
        
      return userData?.isPrime;
    },
  });