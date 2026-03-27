import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { getPosts } from "../../actions/post"
import { getUsers } from "../../actions/user"
import { PostForm } from "./components/PostForm"

export default async function Posts() {
  const posts = await getPosts()
  const users = await getUsers()

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">{post.content}</p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">
                  {users.find((user) => user.id === post.authorId)?.name}
                </p>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="text-sm text-gray-500">Nenhum post encontrado</p>
        )}
      </div>
      <h1 className="text-2xl font-bold">Criar Post</h1>
      <PostForm />
    </div>
  )
}
