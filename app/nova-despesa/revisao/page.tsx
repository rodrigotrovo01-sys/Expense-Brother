"use client";

import TopAppBar from "@/components/TopAppBar";
import BottomNavBar from "@/components/BottomNavBar";
import Link from "next/link";
import { FileText, ZoomIn, Info, Send } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ReviewDocument() {
  const router = useRouter();

  const handleSend = () => {
    // Navigate home to simulate success
    router.push("/");
  };

  return (
    <div className="bg-background min-h-screen text-on-surface pb-20">
      <TopAppBar showBack />

      <main className="max-w-5xl mx-auto w-full px-5 py-8 flex flex-col gap-6">
        {/* Document Preview Section (Bento Style Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Side: PDF/Receipt Preview */}
          <div className="md:col-span-7 bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col">
            <div className="p-3 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                <span className="text-xs font-semibold uppercase text-on-surface-variant tracking-wide">
                  Comprovante Validado
                </span>
              </div>
              <span className="text-[11px] font-medium text-outline">
                Pág 1 de 1
              </span>
            </div>

            <div className="bg-slate-200 p-6 md:p-10 flex justify-center items-center min-h-[380px] relative">
              <div className="bg-white shadow-xl w-full max-w-sm aspect-[1/1.41] p-6 flex flex-col gap-4 mx-auto select-none">
                {/* Simulated Receipt Content */}
                <div className="flex justify-between border-b border-dashed border-slate-300 pb-3">
                  <span className="text-[11px] font-bold uppercase text-slate-800">
                    Restaurante Sabor Brasil
                  </span>
                  <span className="text-[11px] text-slate-600">15/10/2023</span>
                </div>

                <div className="flex flex-col gap-1.5 mt-2">
                  <div className="flex justify-between text-[10px] text-slate-700">
                    <span>1x Almoço Executivo</span>
                    <span>R$ 45,00</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-700">
                    <span>1x Suco de Laranja</span>
                    <span>R$ 12,00</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-700">
                    <span>Taxa de Serviço</span>
                    <span>R$ 5,70</span>
                  </div>
                </div>

                <div className="mt-auto border-t-2 border-slate-800 pt-3 flex justify-between">
                  <span className="text-sm font-black text-slate-900">
                    TOTAL
                  </span>
                  <span className="text-sm font-black text-slate-900">
                    R$ 62,70
                  </span>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="w-16 h-16 bg-slate-50 border border-slate-200 flex items-center justify-center rounded">
                    <Scan className="text-slate-300 w-8 h-8" />
                  </div>
                </div>
              </div>

              {/* Magnifier Icon decoration */}
              <button className="absolute bottom-4 right-4 bg-primary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-primary-container transition-colors focus:ring-4 focus:ring-primary/20">
                <ZoomIn className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right Side: Summary Details */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Summary Card */}
            <div className="bg-white border border-outline-variant rounded-xl p-5 shadow-sm">
              <h2 className="text-xl font-bold text-primary mb-5">
                Detalhes da Despesa
              </h2>

              <div className="space-y-5">
                <div className="flex flex-col border-b border-outline-variant pb-3 mb-2">
                  <span className="text-[11px] font-medium text-outline uppercase tracking-wider mb-1">
                    Valor Total
                  </span>
                  <span className="text-3xl font-bold text-secondary tracking-tight">
                    R$ 62,70
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-medium text-outline uppercase tracking-wider">
                      Departamento
                    </span>
                    <span className="text-sm font-medium text-on-surface">
                      Vendas Regional
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-medium text-outline uppercase tracking-wider">
                      Categoria
                    </span>
                    <span className="text-sm font-medium text-on-surface">
                      Alimentação
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-medium text-outline uppercase tracking-wider">
                    Projeto
                  </span>
                  <span className="text-sm font-medium text-on-surface">
                    Expansão Nordeste Q4
                  </span>
                </div>

                <div className="flex flex-col bg-surface-container-low p-4 rounded-lg border border-surface-variant">
                  <span className="text-[11px] font-semibold text-outline uppercase tracking-wider mb-1.5">
                    Observação
                  </span>
                  <p className="text-sm text-on-surface-variant italic leading-relaxed">
                    Almoço com cliente do Grupo Alpha para fechamento de
                    contrato anual.
                  </p>
                </div>
              </div>
            </div>

            {/* Status & Audit */}
            <div className="bg-white border border-outline-variant rounded-xl p-4 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-4 ring-amber-100"></div>
                <span className="text-sm font-semibold text-on-surface">
                  Status Atual: Pendente
                </span>
              </div>
              <Info className="w-5 h-5 text-outline" />
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="mt-2 flex flex-col md:flex-row gap-5 items-center justify-between bg-surface-variant/40 p-5 rounded-xl border border-outline-variant">
          <div className="flex flex-col text-center md:text-left mb-2 md:mb-0">
            <span className="text-base font-semibold text-on-surface mb-1">
              Tudo pronto para enviar?
            </span>
            <span className="text-xs text-outline font-medium">
              Esta ação não pode ser desfeita após a aprovação inicial.
            </span>
          </div>
          <div className="flex gap-3 w-full md:w-auto flex-col sm:flex-row">
            <Link
              href="/nova-despesa/detalhes"
              className="px-6 py-3.5 rounded-lg border-2 border-secondary text-secondary font-bold hover:bg-secondary/5 transition-colors text-center w-full sm:w-auto"
            >
              Editar Dados
            </Link>
            <button
              onClick={handleSend}
              className="px-6 py-3.5 rounded-lg bg-secondary text-white font-bold shadow-md hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Send className="w-5 h-5" />
              Enviar para Aprovação
            </button>
          </div>
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
}

// Temporary inline icon for receipt structure
function Scan(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <rect width="5" height="5" x="7" y="7" rx="1" />
      <rect width="5" height="5" x="12" y="12" rx="1" />
    </svg>
  );
}
