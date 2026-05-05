"use client";

import TopAppBar from "@/components/TopAppBar";
import BottomNavBar from "@/components/BottomNavBar";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FileText,
  ChevronRight,
  Download,
  Search,
  Briefcase,
  Calendar,
} from "lucide-react";

export default function Relatorios() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request for realistic UI behavior
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const reports = [
    {
      id: 1,
      title: "Despesas Outubro/2023",
      period: "01 Out - 31 Out 2023",
      amount: "1.240,50",
      status: "Pendente",
      statusColor: "bg-amber-100 text-amber-800",
      itemCount: 8,
      type: "Mensal",
      icon: Calendar,
    },
    {
      id: 2,
      title: "Viagem Conferência SP",
      period: "15 Set - 20 Set 2023",
      amount: "3.450,00",
      status: "Aprovado",
      statusColor: "bg-green-100 text-green-800",
      itemCount: 12,
      type: "Viagem",
      icon: Briefcase,
    },
    {
      id: 3,
      title: "Despesas Setembro/2023",
      period: "01 Set - 30 Set 2023",
      amount: "850,00",
      status: "Pago",
      statusColor: "bg-blue-100 text-blue-800",
      itemCount: 5,
      type: "Mensal",
      icon: Calendar,
    },
    {
      id: 4,
      title: "Despesas Agosto/2023",
      period: "01 Ago - 31 Ago 2023",
      amount: "2.100,00",
      status: "Pago",
      statusColor: "bg-blue-100 text-blue-800",
      itemCount: 15,
      type: "Mensal",
      icon: Calendar,
    },
  ];

  const filteredReports = reports.filter(
    (report) =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.period.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopAppBar title="Relatórios" showBack />

      <main className="flex-1 w-full max-w-5xl mx-auto px-5 py-6 flex flex-col gap-6 pb-24">
        {/* Header and Search */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-primary">
                Meus Relatórios
              </h2>
              <p className="text-sm text-on-surface-variant mt-1">
                Gerencie e exporte seus relatórios de despesas.
              </p>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
            <input
              type="text"
              placeholder="Buscar por título ou período..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-12 pl-10 pr-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm shadow-sm text-on-surface"
            />
          </div>
        </div>

        {/* Reports List */}
        <div className="flex flex-col gap-4">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-5 rounded-xl flex flex-col shadow-sm animate-pulse"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-10 h-10 bg-slate-200 rounded-lg shrink-0"></div>
                    <div className="space-y-2 w-full max-w-[200px]">
                      <div className="h-4 bg-slate-200 rounded w-full"></div>
                      <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                    </div>
                  </div>
                  <div className="h-6 w-20 bg-slate-200 rounded-full shrink-0"></div>
                </div>

                <div className="flex items-end justify-between border-t border-slate-100 pt-4 mt-1">
                  <div className="space-y-2 w-1/3 max-w-[120px]">
                    <div className="h-3 bg-slate-200 rounded w-full"></div>
                    <div className="h-5 bg-slate-200 rounded w-4/5"></div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-6 w-24 bg-slate-200 rounded-md"></div>
                    <div className="w-6 h-6 bg-slate-200 rounded shrink-0"></div>
                    <div className="w-5 h-5 bg-slate-200 rounded shrink-0"></div>
                  </div>
                </div>
              </div>
            ))
          ) : filteredReports.length > 0 ? (
            filteredReports.map((report) => {
              const Icon = report.icon;
              return (
                <Link
                  href={`/relatorios/${report.id}`}
                  key={report.id}
                  className="bg-white border border-slate-200 p-5 rounded-xl flex flex-col hover:border-secondary/50 hover:shadow-md transition-all duration-200 cursor-pointer group block"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-primary group-hover:text-secondary transition-colors">
                          {report.title}
                        </h3>
                        <p className="text-xs text-on-surface-variant font-medium mt-0.5">
                          {report.period}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${report.statusColor}`}
                    >
                      {report.status}
                    </span>
                  </div>

                  <div className="flex items-end justify-between border-t border-slate-100 pt-4 mt-1">
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-semibold text-outline uppercase tracking-wider">
                        Valor Solicitado
                      </span>
                      <span className="font-bold text-lg text-secondary">
                        R$ {report.amount}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-xs font-medium text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-md">
                        {report.itemCount} despesas
                      </span>
                      <button
                        className="text-outline hover:text-secondary transition-colors p-1"
                        title="Baixar PDF"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Download className="w-5 h-5" />
                      </button>
                      <ChevronRight className="w-5 h-5 text-outline group-hover:text-secondary transition-colors" />
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="p-8 mt-4 text-center text-sm text-on-surface-variant border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 flex flex-col items-center">
              <FileText className="w-10 h-10 text-outline/50 mb-3" />
              <p className="font-semibold text-on-surface mb-1">
                Nenhum relatório encontrado
              </p>
              <p className="text-xs">Tente ajustar os termos da sua busca.</p>
            </div>
          )}
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
}
