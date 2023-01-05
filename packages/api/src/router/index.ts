import * as trpc from "@trpc/server";
import { z } from "zod";

import type { Context } from "../context";

export const appRouter = trpc
  .router<Context>()
  .query("getPets", {
    async resolve({ ctx }) {
      return await ctx.prisma.pet.findMany();
    },
  })
  .query("getPet", {
    input: z.object({
      id: z.number(),
    }),

    async resolve({ input, ctx }) {
      return await ctx.prisma.pet.findUnique({
        where: {
          id: input.id,
        },
      });
    },
  })
  .mutation("createPet", {
    input: z.object({
      name: z.string().min(1).max(245),
      age: z.number().int().positive(),
      breed: z.string().min(1).max(50).optional(),
      photo: z.string().optional(),
      diet: z.string().max(500).optional(),
      diseases: z.string().max(500).optional(),
      information: z.string().max(500).optional(),
    }),

    async resolve({ input, ctx }) {
      return await ctx.prisma.pet.create({
        data: {
          name: input.name,
          age: input.age,
          breed: input.breed,
          photo: input.photo,
          diet: input.diet,
          diseases: input.diseases,
          information: input.information,
        },
      });
    },
  })
  .mutation("deletePet", {
    input: z.object({
      id: z.number(),
    }),

    async resolve({ input, ctx }) {
      return await ctx.prisma.pet.delete({
        where: {
          id: input.id,
        },
      });
    },
  });

export type AppRouter = typeof appRouter;
