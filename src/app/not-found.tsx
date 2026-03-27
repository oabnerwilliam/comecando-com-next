import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">Página não encontrada</h1>
            <p className="text-gray-500">A página que você está procurando não existe.</p>
            <Link href="/" className="text-blue-500">Voltar para a página inicial</Link>
        </div>
    );
}