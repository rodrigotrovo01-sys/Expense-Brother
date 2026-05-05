import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center p-4">
      <h2 className="text-2xl font-bold">404 - Página não encontrada</h2>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Voltar para a página inicial
      </Link>
    </div>
  );
}
