"use client"

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { createUser } from "../../actions/user"
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"

export const UserForm = () => {
  const router = useRouter()
  const { register, handleSubmit, reset } = useForm<{
    name: string
    email: string
  }>({
    defaultValues: {
      name: "",
      email: "",
    },
  })
  const onSubmit = async (data: { name: string; email: string }) => {
    await createUser(data)
    router.refresh()
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Name" {...register("name")} />
        <Input type="email" placeholder="Email" {...register("email")} />
        <Button type="submit">Create User</Button>
      </form>
    </>
  )
}
