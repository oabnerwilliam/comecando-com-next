"use server"

import { prisma } from "../lib/prisma"

export const getPostsByUserId = async (userId: string) =>
  prisma.post.findMany({
    where: {
      authorId: Number(userId),
    },
  })

export const getPosts = async () => prisma.post.findMany()

export const createPost = async (data: {
  title: string
  content: string
  authorId: string
}) =>
  prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      authorId: Number(data.authorId),
    },
    include: {
      author: true,
    },
  })
