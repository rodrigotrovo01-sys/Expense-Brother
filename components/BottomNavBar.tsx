"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Camera,
  FileText,
  User,
  Plane,
  ShieldCheck,
} from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function BottomNavBar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: LayoutDashboard, label: "Início" },
    { href: "/viagens", icon: Plane, label: "Viagens" },
    { href: "/camera", icon: Camera, label: "Câmera" },
    { href: "/relatorios", icon: FileText, label: "Relatórios" },
    { href: "/admin", icon: ShieldCheck, label: "Admin" },
    { href: "/cadastro", icon: User, label: "Perfil" },
  ];

  return (
    <>
      <div className="h-16 md:hidden" /> {/* Spacer */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 pb-safe px-2 bg-white border-t border-slate-200 shadow-lg md:hidden">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              href={item.href}
              key={item.href}
              className={clsx(
                "flex flex-col items-center justify-center p-1 w-full max-w-[16%] scale-95 active:scale-90 transition-transform duration-150 rounded-lg",
                isActive
                  ? "text-secondary"
                  : "text-slate-500 hover:text-secondary",
              )}
            >
              <div
                className={clsx(
                  "p-1 rounded-md mb-0.5",
                  isActive && "bg-surface-container-low",
                )}
              >
                <Icon
                  className={clsx(
                    "w-5 h-5",
                    isActive && "fill-secondary text-secondary",
                  )}
                />
              </div>
              <span className="text-[9px] font-semibold truncate w-full text-center">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
