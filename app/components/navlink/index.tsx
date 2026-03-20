import Link from "next/link";

export const Navlink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <Link href={href} className="rounded px-4 py-2 text-md font-medium text-white transition hover:bg-white/10">
            {children}
        </Link>
    );
};