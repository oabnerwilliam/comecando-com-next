import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { prisma } from "../../lib/prisma"
import { UserForm } from "./components/UserForm"

export default async function Users() {
  const users = await prisma.user.findMany()

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{user.email}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <UserForm />
    </div>
  )
}
