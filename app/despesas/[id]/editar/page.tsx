"use client";

import TopAppBar from "@/components/TopAppBar";
import BottomNavBar from "@/components/BottomNavBar";
import Link from "next/link";
import {
  Users,
  ChevronDown,
  ReceiptText,
  X,
  ChevronRight,
  Save,
  Info,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function EditExpense() {
  const router = useRouter();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="bg-background min-h-screen text-on-surface">
      <TopAppBar title="Corrigir Despesa" showBack />

      <main className="pt-8 pb-24 px-5 max-w-2xl mx-auto">
        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex gap-3 text-secondary shadow-sm">
          <Info className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <h3 className="font-bold text-sm">Modo de Edição</h3>
            <p className="text-xs mt-1 text-on-secondary-fixed-variant">
              Corrija as informações divergentes ou envie um novo comprovante
              para que a despesa possa ser reavaliada.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 md:p-8">
          <div className="mb-6 border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-primary">
              Detalhes da Despesa
            </h2>
            <p className="text-sm text-on-surface-variant mt-1">
              Atualize as informações para o reembolso corporativo.
            </p>
          </div>

          <form onSubmit={handleSave} className="flex flex-col gap-5">
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
                  defaultValue="Nenhum"
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
                    defaultValue="marketing"
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
                  defaultValue="Marketing Digital"
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
                  defaultValue="450,00"
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
                defaultValue="Hospedagem evento anual - Hotel Transamerica."
                placeholder="Descreva o propósito da despesa..."
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-secondary bg-slate-50 text-sm outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* Attachment Preview (Bento Element) */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-on-surface block">
                Comprovante
              </label>
              <div className="mt-1 bg-amber-50 border border-amber-200 rounded-lg p-3 flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-12 h-12 bg-white rounded-md border border-amber-300 flex items-center justify-center text-amber-600 shrink-0">
                    <ReceiptText className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-amber-900 truncate">
                      comprovante_ilegivel.jpg
                    </p>
                    <p className="text-[11px] text-amber-700 truncate mt-0.5">
                      Enviado em 08 Out • 1.2 MB
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="px-3 py-1.5 text-xs font-semibold bg-white text-secondary border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors w-full md:w-auto text-center"
                  >
                    Ver Atual
                  </button>
                  <label className="px-3 py-1.5 text-xs font-semibold bg-secondary text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer w-full md:w-auto text-center">
                    Substituir
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="mt-8 flex flex-col md:flex-row gap-3 pt-4 border-t border-slate-100">
              <button
                type="submit"
                className="w-full flex-1 py-3.5 bg-primary text-white rounded-xl font-bold text-base shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 hover:bg-primary-container"
              >
                <Save className="w-5 h-5" />
                Salvar Correções
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="w-full flex-1 py-3.5 bg-transparent border-2 border-primary text-primary rounded-xl font-bold text-base active:scale-[0.98] transition-all flex justify-center hover:bg-slate-50"
              >
                Cancelar
              </button>
            </div>
          </form>
        </section>
      </main>

      <BottomNavBar />
    </div>
  );
}
