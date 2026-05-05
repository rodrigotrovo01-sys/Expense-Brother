"use client";

import TopAppBar from "@/components/TopAppBar";
import BottomNavBar from "@/components/BottomNavBar";
import Link from "next/link";
import { useState } from "react";
import {
  Wallet,
  Utensils,
  CarFront,
  Bed,
  Plane,
  ChevronRight,
  Camera,
  Filter,
  AlertCircle,
  X,
  Clock,
} from "lucide-react";

export default function Dashboard() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [showRejectedModal, setShowRejectedModal] = useState(true);

  const expenses = [
    {
      id: 1,
      title: "Almoço Comercial - Cliente XP",
      dateLabel: "12 Out, 2023",
      dateIso: "2023-10-12",
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
      dateIso: "2023-10-10",
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
      dateIso: "2023-10-08",
      category: "Viagem",
      amount: "450,00",
      status: "Rejeitado",
      icon: Bed,
      statusColor: "bg-red-100 text-red-800",
      isExpiringSoon: true,
    },
    {
      id: 4,
      title: "Passagem GOL - RJ/SP",
      dateLabel: "05 Out, 2023",
      dateIso: "2023-10-05",
      category: "Viagem",
      amount: "652,45",
      status: "Aprovado",
      icon: Plane,
      statusColor: "bg-green-100 text-green-800",
    },
  ];

  const filteredExpenses = expenses.filter((expense) => {
    let isValid = true;

    if (categoryFilter && expense.category !== categoryFilter) {
      isValid = false;
    }

    const expenseDate = new Date(expense.dateIso);
    if (startDate && expenseDate < new Date(startDate)) {
      isValid = false;
    }
    if (endDate && expenseDate > new Date(endDate)) {
      isValid = false;
    }

    return isValid;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <TopAppBar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-5 py-6 flex flex-col gap-8 md:flex-row">
        {/* Left Col / Header Area */}
        <div className="flex-1 space-y-6">
          <section className="bg-primary p-6 rounded-xl flex flex-col justify-between min-h-[180px] relative overflow-hidden">
            <div className="z-10">
              <p className="text-on-primary-container text-xs font-semibold mb-2 tracking-wider uppercase">
                Resumo Mensal
              </p>
              <h2 className="text-white text-2xl font-bold">
                Olá, Rodrigo Trovo
              </h2>
              <p className="text-white text-sm mt-1">
                Você possui 3 reembolsos pendentes de análise.
              </p>
            </div>
            <div className="z-10 flex items-baseline gap-2 mt-4">
              <span className="text-white text-3xl font-bold tracking-tight">
                R$ 1.240,50
              </span>
              <span className="text-on-primary-container text-xs font-medium">
                Total este mês
              </span>
            </div>
            {/* Decorative Bg */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-secondary-container opacity-20 rounded-full blur-3xl"></div>
          </section>

          <section className="bg-red-50 border-2 border-red-500 p-4 rounded-xl flex items-start gap-4 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.3)]">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-red-700 font-bold text-sm tracking-tight mb-0.5">
                Atenção: Reembolso Expirando!
              </h3>
              <p className="text-red-600 text-xs font-medium">
                Sua despesa &quot;Hospedagem Hotel Transamerica&quot; foi
                rejeitada e o prazo para correção expira em 24 horas.
              </p>
              <Link
                href="/despesas/3/editar"
                className="text-red-700 font-bold text-xs mt-2 underline hover:text-red-800 self-start"
              >
                Corrigir Agora
              </Link>
            </div>
          </section>

          <section className="bg-surface-container border border-outline-variant p-6 rounded-xl flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-on-surface-variant text-xs font-medium">
                  Disponível para
                </p>
                <p className="text-on-surface font-semibold text-xs tracking-wider uppercase">
                  Reembolso
                </p>
              </div>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-2/3"></div>
            </div>
            <p className="mt-2 text-on-surface-variant text-xs font-medium">
              65% do limite mensal utilizado
            </p>
          </section>
        </div>

        {/* Right Col / List */}
        <div className="flex-1 md:flex-[1.5] flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="font-semibold text-lg text-on-surface">Recentes</h3>
            <div className="flex items-center gap-4 overflow-x-auto pb-1 sm:pb-0 hide-scrollbar">
              <Link
                href="/nova-despesa/detalhes"
                className="text-sm font-semibold bg-primary text-white hover:bg-primary-container px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors whitespace-nowrap"
              >
                <span className="text-lg leading-none mb-[2px]">+</span> Novo
              </Link>
            </div>
          </div>

          {/* Filters Section */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col md:flex-row gap-4 items-end">
            <div className="flex items-center gap-2 mb-1 md:hidden">
              <Filter className="w-4 h-4 text-outline" />
              <span className="text-sm font-semibold text-on-surface">
                Filtros
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
              <div className="col-span-2 md:col-span-1">
                <label
                  htmlFor="category"
                  className="block text-xs font-semibold text-primary mb-1"
                >
                  Modalidade
                </label>
                <select
                  id="category"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full h-10 px-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm text-on-surface"
                >
                  <option value="">Todas</option>
                  <option value="Alimentação">Alimentação</option>
                  <option value="Transporte">Transporte</option>
                  <option value="Viagem">Viagem</option>
                </select>
              </div>

              <div className="col-span-1 border-t md:border-t-0 md:border-l border-slate-200 pt-3 md:pt-0 md:pl-3">
                <label
                  htmlFor="startDate"
                  className="block text-xs font-semibold text-primary mb-1"
                >
                  Data Inicial
                </label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full h-10 px-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm text-on-surface"
                />
              </div>

              <div className="col-span-1 border-t md:border-t-0 pt-3 md:pt-0">
                <label
                  htmlFor="endDate"
                  className="block text-xs font-semibold text-primary mb-1"
                >
                  Data Final
                </label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full h-10 px-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm text-on-surface"
                />
              </div>
            </div>

            {(startDate || endDate || categoryFilter) && (
              <button
                onClick={() => {
                  setStartDate("");
                  setEndDate("");
                  setCategoryFilter("");
                }}
                className="h-10 px-4 text-xs font-semibold text-secondary hover:bg-secondary/10 rounded-lg transition-colors whitespace-nowrap mt-2 md:mt-0"
              >
                Limpar
              </button>
            )}
          </div>

          <div className="flex flex-col gap-3">
            {filteredExpenses.length > 0 ? (
              filteredExpenses.map((expense) => {
                const Icon = expense.icon;
                return (
                  <div
                    key={expense.id}
                    className="bg-surface-container-lowest border border-slate-200 p-4 rounded-xl flex items-center justify-between hover:bg-surface-container-low transition-colors duration-150 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-slate-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm md:text-base text-on-surface truncate pr-2 max-w-[180px] md:max-w-[240px]">
                          {expense.title}
                        </p>
                        <p className="text-xs md:text-sm text-on-surface-variant">
                          {expense.dateLabel} • {expense.category}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className="font-semibold text-sm md:text-base text-on-surface">
                        R$ {expense.amount}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${expense.statusColor}`}
                      >
                        {expense.status}
                      </span>
                      {expense.isExpiringSoon && (
                        <div className="flex items-center gap-1 mt-0.5 text-red-600 animate-pulse">
                          <Clock className="w-3 h-3" />
                          <span className="text-[10px] font-bold tracking-wider">
                            EXPIRA EM BREVE
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center text-sm text-on-surface-variant border border-dashed border-slate-300 rounded-xl">
                Nenhuma despesa encontrada para este período.
              </div>
            )}

            {filteredExpenses.length > 0 && (
              <button className="text-secondary text-sm font-semibold flex items-center justify-center gap-1 hover:underline mt-2">
                Ver todo o histórico
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </main>

      {/* FAB */}
      <Link
        href="/camera"
        className="fixed bottom-[88px] md:bottom-10 right-6 w-14 h-14 bg-secondary text-white rounded-full shadow-lg flex items-center justify-center z-40 hover:bg-blue-700 active:scale-90 transition-all duration-150"
      >
        <Camera className="w-6 h-6 fill-current" />
      </Link>

      <BottomNavBar />

      {/* Rejected Popup Modal */}
      {showRejectedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden animate-zoom-in">
            <div className="bg-red-50 p-4 flex justify-between items-start border-b border-red-100">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="font-bold text-red-700 text-lg tracking-tight">
                  Despesa Rejeitada
                </h2>
              </div>
              <button
                onClick={() => setShowRejectedModal(false)}
                className="text-red-400 hover:text-red-600 transition-colors bg-white rounded-full p-1 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-sm text-on-surface-variant mb-4">
                Sua despesa <strong>Hospedagem Hotel Transamerica</strong> no
                valor de <strong>R$ 450,00</strong> foi rejeitada pelo
                departamento financeiro.
              </p>

              <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs text-on-surface-variant font-medium mb-5">
                <span className="block text-slate-500 uppercase tracking-widest text-[10px] mb-1">
                  MOTIVO DA REJEIÇÃO
                </span>
                &quot;Comprovante ilegível. Favor reenviar.&quot;
              </div>

              <div className="flex flex-col gap-2">
                <Link
                  href="/despesas/3/editar"
                  className="w-full bg-red-600 text-white font-bold py-3 rounded-xl shadow-md hover:bg-red-700 active:scale-[0.98] transition-all flex items-center justify-center text-sm"
                >
                  Corrigir Despesa Agora
                </Link>
                <button
                  onClick={() => setShowRejectedModal(false)}
                  className="w-full bg-white text-secondary font-bold border-2 border-slate-100 py-3 rounded-xl active:scale-[0.98] transition-all text-sm hover:bg-slate-50"
                >
                  Lembrar mais tarde
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
