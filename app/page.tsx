import { LinkButton } from "./components/LinkButton"

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Começando com Next.js</h1>
      <p className="text-sm text-gray-500">
        Este é um site de exemplo para começar a usar Next.js
      </p>
      <div className="flex gap-4">
        <LinkButton href="/posts" size="lg">
          Posts
        </LinkButton>
        <LinkButton href="/users" size="lg">
          Users
        </LinkButton>
      </div>
    </div>
  )
}
