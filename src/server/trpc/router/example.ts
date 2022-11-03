import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const exampleRouter = router({
  listings: publicProcedure
    .input(z.object({limit: z.number()}))
    .query( async ({ input }) => {
      const listings = await prisma?.listing.findMany({take: input.limit})
      return listings
    }),
  createListing: protectedProcedure
    .input(z.object({name: z.string()}))
    .query(({input})=>{
      return {

      }
    })
});
