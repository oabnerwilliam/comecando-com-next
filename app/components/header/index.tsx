import { Navlink } from "../navlink"

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-md">
      <nav className="flex items-center justify-center gap-6 px-6 py-4">
        <Navlink href="/">Home</Navlink>
        <Navlink href="/posts">Posts</Navlink>
      </nav>
    </header>
  )
}
