"use server"

import { prisma } from "@/lib/prisma"

export const createUser = async (data: { name: string; email: string }) =>
  prisma.user.create({
    data,
  })

export const getUsers = async () => prisma.user.findMany()
