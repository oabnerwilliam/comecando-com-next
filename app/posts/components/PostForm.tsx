"use client"

import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"
import { useForm } from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select"
import { createPost } from "../../actions/post"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getUsers } from "../../actions/user"
import { useRouter } from "next/navigation"

export const PostForm = () => {
  const router = useRouter()

  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await getUsers(),
    staleTime: 1000 * 60 * 5,
  })

  const { register, handleSubmit, reset, setValue } = useForm<{
    title: string
    content: string
    authorId: string
  }>({
    defaultValues: {
      title: "",
      content: "",
      authorId: "",
    },
  })

  const onSubmit = async (data: {
    title: string
    content: string
    authorId: string
  }) => {
    await createPost(data)
    reset()
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Input type="text" placeholder="Título" {...register("title")} />
      <Input type="text" placeholder="Conteúdo" {...register("content")} />
      <Select onValueChange={(value) => setValue("authorId", value)}>
        <SelectTrigger>
          <SelectValue placeholder="Selecione o autor" />
        </SelectTrigger>
        <SelectContent>
          {(users ?? []).map((user) => (
            <SelectItem key={user.id} value={user.id.toString()}>
              {user.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit">Criar Post</Button>
    </form>
  )
}
