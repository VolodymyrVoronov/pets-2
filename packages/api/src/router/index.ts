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
  .query("getMarkedPets", {
    async resolve({ ctx }) {
      return await ctx.prisma.pet.findMany({
        where: {
          isMarked: true,
        },
      });
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
      age: z.string(),
      breed: z.string().max(50).default("").optional(),
      photo: z.string().default("").optional(),
      diet: z.string().max(500).default("").optional(),
      diseases: z.string().max(500).default("").optional(),
      information: z.string().max(500).default("").optional(),
      isMarked: z.boolean().optional(),
    }),

    async resolve({ input, ctx }) {
      return await ctx.prisma.pet.create({
        data: {
          name: input.name,
          age: input.age,
          breed: input.breed || "",
          photo: input.photo || "",
          diet: input.diet || "",
          diseases: input.diseases || "",
          information: input.information || "",
          isMarked: input.isMarked || false,
        },
      });
    },
  })
  .mutation("updatePet", {
    input: z.object({
      id: z.number(),
      name: z.string().min(1).max(245),
      age: z.string(),
      breed: z.string().max(50).default("").optional(),
      photo: z.string().default("").optional(),
      diet: z.string().max(500).default("").optional(),
      diseases: z.string().max(500).default("").optional(),
      information: z.string().max(500).default("").optional(),
      isMarked: z.boolean().optional(),
    }),

    async resolve({ input, ctx }) {
      return await ctx.prisma.pet.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          age: input.age,
          breed: input.breed || "",
          photo: input.photo || "",
          diet: input.diet || "",
          diseases: input.diseases || "",
          information: input.information || "",
          isMarked: input.isMarked || false,
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
  })
  .mutation("markPet", {
    input: z.object({
      id: z.number(),
      isMarked: z.boolean(),
    }),

    async resolve({ input, ctx }) {
      return await ctx.prisma.pet.update({
        where: {
          id: input.id,
        },
        data: {
          isMarked: input.isMarked,
        },
      });
    },
  });

export type AppRouter = typeof appRouter;
