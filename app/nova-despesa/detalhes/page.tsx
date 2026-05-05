"use client";

import TopAppBar from "@/components/TopAppBar";
import BottomNavBar from "@/components/BottomNavBar";
import Link from "next/link";
import { Users, ChevronDown, ReceiptText, X, ChevronRight } from "lucide-react";

export default function DetailsForm() {
  return (
    <div className="bg-background min-h-screen text-on-surface">
      <TopAppBar showBack />

      <main className="pt-8 pb-24 px-5 max-w-2xl mx-auto">
        {/* Progress Stepper */}
        <div className="flex justify-between items-center mb-8 max-w-md mx-auto">
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
              1
            </div>
            <span className="text-xs font-medium text-primary">Recibo</span>
          </div>
          <div className="flex-1 h-[2px] bg-primary mx-3 mb-5"></div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold ring-4 ring-primary-fixed">
              2
            </div>
            <span className="text-xs font-medium text-primary">Detalhes</span>
          </div>
          <div className="flex-1 h-[2px] bg-slate-200 mx-3 mb-5"></div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-bold">
              3
            </div>
            <span className="text-xs font-medium text-slate-400">Revisão</span>
          </div>
        </div>

        {/* Form Card */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 md:p-8">
          <div className="mb-6 border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-primary">Nova Solicitação</h2>
            <p className="text-sm text-on-surface-variant mt-1">
              Preencha as informações para o reembolso corporativo.
            </p>
          </div>

          <form className="flex flex-col gap-5">
            {/* Participants */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="participantes"
                className="text-sm font-semibold text-on-surface"
              >
                Participantes
              </label>
              <div className="relative group">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-5 h-5 pointer-events-none" />
                <input
                  type="text"
                  id="participantes"
                  name="participantes"
                  placeholder="Ex: João Silva, Maria Costa"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-secondary bg-slate-50 text-sm outline-none transition-all"
                />
              </div>
              <p className="text-[11px] text-slate-400">
                Separe os nomes por vírgula.
              </p>
            </div>

            {/* Bento Style Dual Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Cost Center (Dropdown) */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="centro_custo"
                  className="text-sm font-semibold text-on-surface"
                >
                  Centro de Custo
                </label>
                <div className="relative">
                  <select
                    id="centro_custo"
                    name="centro_custo"
                    defaultValue=""
                    className="w-full pl-4 pr-10 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-secondary bg-slate-50 text-sm outline-none appearance-none transition-all"
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="marketing">Marketing (MKT-001)</option>
                    <option value="sales">Vendas (SAL-042)</option>
                    <option value="eng">Engenharia (ENG-202)</option>
                    <option value="ops">Operações (OPS-500)</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-outline w-5 h-5 pointer-events-none" />
                </div>
              </div>

              {/* Department */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="departamento"
                  className="text-sm font-semibold text-on-surface"
                >
                  Departamento
                </label>
                <input
                  type="text"
                  id="departamento"
                  name="departamento"
                  placeholder="Ex: Comercial"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-secondary bg-slate-50 text-sm outline-none transition-all"
                />
              </div>
            </div>

            {/* Value (Currency Mask Mockup) */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="valor"
                className="text-sm font-semibold text-on-surface"
              >
                Valor
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-primary">
                  R$
                </span>
                <input
                  type="text"
                  id="valor"
                  name="valor"
                  placeholder="0,00"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-secondary bg-slate-50 text-xl text-primary font-bold outline-none transition-all"
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="descricao"
                className="text-sm font-semibold text-on-surface"
              >
                Descrição
              </label>
              <textarea
                id="descricao"
                name="descricao"
                placeholder="Descreva o propósito da despesa..."
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-secondary bg-slate-50 text-sm outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* Attachment Preview (Bento Element) */}
            <div className="mt-2 bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-md border border-blue-200 flex items-center justify-center text-secondary shrink-0">
                <ReceiptText className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-secondary truncate">
                  comprovante_refeicao.jpg
                </p>
                <p className="text-[11px] text-blue-600 truncate mt-0.5">
                  Enviado hoje • 420 KB
                </p>
              </div>
              <button
                type="button"
                className="text-secondary opacity-60 hover:opacity-100 p-2 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </form>
        </section>

        {/* Form Actions */}
        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/nova-despesa/revisao"
            className="w-full py-3.5 bg-primary text-white rounded-xl font-bold text-base shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 hover:bg-primary-container"
          >
            Continuar
            <ChevronRight className="w-5 h-5" />
          </Link>
          <Link
            href="/"
            className="w-full py-3.5 bg-transparent border-2 border-primary text-primary rounded-xl font-bold text-base active:scale-[0.98] transition-all flex justify-center hover:bg-slate-50"
          >
            Cancelar
          </Link>
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
}
