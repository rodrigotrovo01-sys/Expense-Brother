"use client";

import TopAppBar from "@/components/TopAppBar";
import BottomNavBar from "@/components/BottomNavBar";
import Link from "next/link";
import {
  Utensils,
  CarFront,
  Bed,
  Plane,
  ChevronRight,
  Pencil,
  FileText,
  Calendar,
  Wallet,
} from "lucide-react";
import { useParams } from "next/navigation";

export default function ReportDetails() {
  const params = useParams();
  const reportId = params.id;

  // Mock data for the report
  const report = {
    id: reportId,
    title: "Despesas Outubro/2023",
    period: "01 Out - 31 Out 2023",
    amount: "1.240,50",
    status: "Pendente",
    statusColor: "bg-amber-100 text-amber-800",
    itemCount: 4,
    type: "Mensal",
  };

  const expenses = [
    {
      id: 1,
      title: "Almoço Comercial - Cliente XP",
      dateLabel: "12 Out, 2023",
      category: "Alimentação",
      amount: "85,90",
      status: "Pendente",
      icon: Utensils,
      statusColor: "bg-amber-100 text-amber-800",
    },
    {
      id: 2,
      title: "Uber - Escritório para Aeroporto",
      dateLabel: "10 Out, 2023",
      category: "Transporte",
      amount: "42,15",
      status: "Aprovado",
      icon: CarFront,
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 3,
      title: "Hospedagem Hotel Transamerica",
      dateLabel: "08 Out, 2023",
      category: "Viagem",
      amount: "450,00",
      status: "Rejeitado",
      icon: Bed,
      statusColor: "bg-red-100 text-red-800",
      comment: "Comprovante ilegível. Favor reenviar.",
    },
    {
      id: 4,
      title: "Passagem GOL - RJ/SP",
      dateLabel: "05 Out, 2023",
      category: "Viagem",
      amount: "652,45",
      status: "Aprovado",
      icon: Plane,
      statusColor: "bg-green-100 text-green-800",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopAppBar title="Detalhes do Relatório" showBack />

      <main className="flex-1 w-full max-w-5xl mx-auto px-5 py-6 flex flex-col gap-6 pb-24">
        {/* Report Summary Card */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-primary">
                  {report.title}
                </h2>
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${report.statusColor}`}
                >
                  {report.status}
                </span>
              </div>

              <div className="flex items-center gap-4 mt-1 text-sm text-on-surface-variant font-medium">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-outline" />
                  {report.period}
                </div>
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-outline" />
                  {report.itemCount} despesas
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
              <span className="text-[11px] font-semibold text-outline uppercase tracking-wider">
                Valor Solicitado
              </span>
              <span className="font-bold text-3xl text-secondary">
                R$ {report.amount}
              </span>
            </div>
          </div>
        </div>

        {/* Expenses List */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg text-on-surface">
              Despesas Inclusas
            </h3>
          </div>

          <div className="flex flex-col gap-3">
            {expenses.map((expense) => {
              const Icon = expense.icon;
              return (
                <div
                  key={expense.id}
                  className="bg-white border border-slate-200 p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-sm transition-all duration-150"
                >
                  <div className="flex items-start md:items-center gap-4">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-slate-500" />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-base text-on-surface">
                        {expense.title}
                      </p>
                      <p className="text-sm text-on-surface-variant mt-0.5">
                        {expense.dateLabel} • {expense.category}
                      </p>
                      {expense.comment && (
                        <p className="text-xs text-red-600 font-medium mt-1.5 bg-red-50 p-2 rounded-md border border-red-100">
                          <strong>Motivo da rejeição:</strong> {expense.comment}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:flex-col md:items-end gap-3 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                      <span className="font-bold text-lg text-on-surface leading-none">
                        R$ {expense.amount}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mt-1 ${expense.statusColor}`}
                      >
                        {expense.status}
                      </span>
                    </div>

                    <Link
                      href={`/despesas/${expense.id}/editar`}
                      className="px-3 py-1.5 text-xs font-semibold bg-surface-container-low text-secondary border border-surface-variant rounded-lg hover:bg-secondary hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                      Corrigir
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
}
