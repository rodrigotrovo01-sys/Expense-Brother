"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Bell } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TopAppBar({
  title = "Expenses Brother",
  showBack = false,
}) {
  const router = useRouter();

  return (
    <header className="bg-slate-50 border-b border-slate-200 flex justify-between items-center w-full px-5 py-3 h-14 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        {showBack && (
          <button
            onClick={() => router.back()}
            className="text-slate-500 hover:text-slate-700 transition"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        )}
        <h1 className="font-bold text-lg text-primary">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-primary hover:text-primary-container transition">
          <Bell className="w-6 h-6" />
        </button>
        <Link
          href="/cadastro"
          className="block relative w-8 h-8 rounded-full overflow-hidden bg-slate-200 border border-slate-300"
        >
          <Image
            src="https://picsum.photos/seed/profile/100/100"
            alt="Foto de perfil do usuário"
            fill
            referrerPolicy="no-referrer"
            className="object-cover"
          />
        </Link>
      </div>
    </header>
  );
}
