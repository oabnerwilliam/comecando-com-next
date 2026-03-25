// app/actions/user.ts
"use server"

import { prisma } from "@/lib/prisma"

export async function createUser(data: { name: string; email: string }) {
  return await prisma.user.create({
    data,
  })
}
