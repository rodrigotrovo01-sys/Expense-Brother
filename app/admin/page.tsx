"use client";

import TopAppBar from "@/components/TopAppBar";
import BottomNavBar from "@/components/BottomNavBar";
import {
  ShieldCheck,
  AlertCircle,
  CheckCircle,
  XCircle,
  Search,
  ChevronRight,
  FileText,
  User,
  Settings,
  CreditCard,
  Eye,
  X,
  Send,
  Image as ImageIcon,
} from "lucide-react";
import { useState } from "react";

export default function AdminScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<
    "approvals" | "payments" | "settings"
  >("approvals");
  const [selectedApproval, setSelectedApproval] = useState<number | null>(null);
  const [isReceiptModalOpen, setReceiptModalOpen] = useState(false);

  const approvals = [
    {
      id: 1,
      name: "Rodrigo Trovo",
      role: "Executivo",
      description: "Despesas Outubro/2023",
      notesCount: 8,
      totalAmount: "1.240,50",
      hasDivergence: false,
      divergenceReason: null,
      status: "Pendente Aprovação",
      receipts: [
        {
          id: 101,
          type: "Alimentação",
          date: "15/10/2023",
          amount: "120,00",
          imageUrl: "https://picsum.photos/seed/receipt1/400/600",
        },
        {
          id: 102,
          type: "Hospedagem",
          date: "16/10/2023",
          amount: "1.120,50",
          imageUrl: "https://picsum.photos/seed/receipt2/400/600",
        },
      ],
    },
    {
      id: 2,
      name: "Mariana Costa",
      role: "Gerente",
      description: "Viagem Conferência SP",
      notesCount: 12,
      totalAmount: "3.450,00",
      hasDivergence: true,
      divergenceReason:
        "Comprovante Uber ilegível e valor acima do limite (R$ 150,00 diarios excedidos em alimentação)",
      status: "Pendente Aprovação",
      receipts: [],
    },
    {
      id: 3,
      name: "Carlos Silveira",
      role: "Diretor",
      description: "Almoço Comercial - Cliente Internacional",
      notesCount: 2,
      totalAmount: "850,00",
      hasDivergence: false,
      divergenceReason: null,
      status: "Pendente Aprovação",
      receipts: [],
    },
  ];

  const filteredApprovals = approvals.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleApprove = (id: number) => {
    alert(`Reembolso #${id} Aprovado com sucesso! O pagamento foi liberado.`);
    setSelectedApproval(null);
  };

  const handleReject = (id: number) => {
    alert(`Reembolso #${id} Rejeitado e devolvido para correção.`);
    setSelectedApproval(null);
  };

  const selectedData = approvals.find((a) => a.id === selectedApproval);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopAppBar title="Painel Financeiro / Admin" showBack />

      <main className="flex-1 w-full max-w-5xl mx-auto px-5 py-6 flex flex-col gap-6 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-primary">Administração</h2>
            <p className="text-sm text-on-surface-variant mt-1">
              Gerenciamento completo de reembolsos e sistema.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded-lg border border-outline-variant">
            <ShieldCheck className="w-4 h-4 text-secondary" />
            <span className="text-xs font-bold text-secondary">
              Acesso Master
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-outline-variant overflow-x-auto hide-scrollbar">
          <button
            onClick={() => setActiveTab("approvals")}
            className={`px-4 py-3 text-sm font-bold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${activeTab === "approvals" ? "border-primary text-primary" : "border-transparent text-outline hover:text-on-surface"}`}
          >
            <CheckCircle className="w-4 h-4" /> Aprovações
            <span className="bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full ml-1">
              3
            </span>
          </button>
          <button
            onClick={() => setActiveTab("payments")}
            className={`px-4 py-3 text-sm font-bold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${activeTab === "payments" ? "border-primary text-primary" : "border-transparent text-outline hover:text-on-surface"}`}
          >
            <CreditCard className="w-4 h-4" /> Pagamentos & Depósitos
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-4 py-3 text-sm font-bold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${activeTab === "settings" ? "border-primary text-primary" : "border-transparent text-outline hover:text-on-surface"}`}
          >
            <Settings className="w-4 h-4" /> Configurações
          </button>
        </div>

        {activeTab === "approvals" && (
          <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
              <input
                type="text"
                placeholder="Buscar por colaborador ou descrição..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 pl-10 pr-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm shadow-sm text-on-surface"
              />
            </div>

            {filteredApprovals.length > 0 ? (
              filteredApprovals.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* User & Title Info */}
                  <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-bold text-base text-primary mr-2 leading-tight">
                          {item.name}
                        </h3>
                        <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-0.5 rounded w-max mt-1 mb-1">
                          {item.role}
                        </span>
                        <p className="text-sm font-semibold text-on-surface">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start sm:items-end bg-slate-50 p-3 rounded-lg border border-slate-200 shrink-0">
                      <span className="text-[10px] font-bold text-outline uppercase tracking-wider">
                        Valor Total Solicitado
                      </span>
                      <span className="font-bold text-xl text-secondary">
                        R$ {item.totalAmount}
                      </span>
                      <div className="flex items-center gap-1.5 mt-1 text-on-surface-variant">
                        <FileText className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium">
                          {item.notesCount} Notas / Recibos
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Divergence Alerts */}
                  {item.hasDivergence && (
                    <div className="bg-red-50 border-y border-red-100 p-4 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-red-700">
                          Divergência Encontrada pelo Sistema
                        </span>
                        <span className="text-xs text-red-600 mt-0.5">
                          {item.divergenceReason}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Expanded Details */}
                  {selectedApproval === item.id && (
                    <div className="p-5 bg-slate-50/50 border-y border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4 animate-in slide-in-from-top-2">
                      <div>
                        <h4 className="text-sm font-bold text-primary mb-3">
                          Comprovantes Associados
                        </h4>
                        <div className="flex flex-col gap-2">
                          {item.receipts && item.receipts.length > 0 ? (
                            item.receipts.map((receipt) => (
                              <div
                                key={receipt.id}
                                className="flex items-center justify-between bg-white border border-slate-200 p-3 rounded-lg"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="bg-slate-100 p-2 rounded-md">
                                    <ImageIcon className="w-4 h-4 text-outline" />
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-sm font-bold text-on-surface">
                                      {receipt.type}
                                    </span>
                                    <span className="text-[10px] text-outline">
                                      {receipt.date} • R$ {receipt.amount}
                                    </span>
                                  </div>
                                </div>
                                <button
                                  onClick={() => setReceiptModalOpen(true)}
                                  className="text-secondary hover:bg-secondary/10 p-2 rounded-full transition-colors flex shrink-0"
                                >
                                  <Eye className="w-4 h-4" />
                                </button>
                              </div>
                            ))
                          ) : (
                            <p className="text-xs text-outline italic">
                              Nenhum comprovante anexado ou disponível para
                              visualização rápida.
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-primary mb-3">
                          Fluxo de Aprovação
                        </h4>
                        <div className="relative pl-4 border-l-2 border-slate-200 space-y-4">
                          <div className="relative">
                            <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-green-500 ring-4 ring-slate-50"></div>
                            <p className="text-xs font-bold text-on-surface">
                              Submetido
                            </p>
                            <p className="text-[10px] text-outline">
                              Por {item.name} em 20/10/2023
                            </p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-slate-50"></div>
                            <p className="text-xs font-bold text-on-surface">
                              Análise Automática IA
                            </p>
                            <p className="text-[10px] text-outline">
                              {item.hasDivergence
                                ? "Divergências detectadas."
                                : "Tudo certo!"}
                            </p>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 ring-4 ring-slate-50"></div>
                            <p className="text-xs font-bold text-outline">
                              Aprovação Financeiro
                            </p>
                            <p className="text-[10px] text-outline">
                              Pendente sua ação
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="p-4 bg-slate-50 flex flex-col sm:flex-row items-center justify-end gap-3">
                    <button
                      onClick={() =>
                        setSelectedApproval(
                          selectedApproval === item.id ? null : item.id,
                        )
                      }
                      className="text-secondary text-sm font-semibold hover:underline flex items-center mr-auto px-2"
                    >
                      {selectedApproval === item.id
                        ? "Fechar Detalhes"
                        : "Ver Detalhes das Notas"}
                      <ChevronRight
                        className={`w-4 h-4 ml-1 transition-transform ${selectedApproval === item.id ? "rotate-90" : ""}`}
                      />
                    </button>
                    <button
                      onClick={() => handleReject(item.id)}
                      className="w-full sm:w-auto px-4 py-2.5 bg-white text-red-600 border border-red-200 font-bold rounded-lg hover:bg-red-50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm shadow-sm"
                    >
                      <XCircle className="w-4 h-4" />
                      Rejeitar / Devolver
                    </button>
                    <button
                      onClick={() => handleApprove(item.id)}
                      className="w-full sm:w-auto px-4 py-2.5 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm shadow-sm"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Liberar Depósito
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-10 text-center text-sm text-on-surface-variant border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 flex flex-col items-center">
                <ShieldCheck className="w-12 h-12 text-outline/40 mb-3" />
                <p className="font-semibold text-on-surface mb-1 text-lg">
                  Nenhum reembolso pendente
                </p>
                <p className="text-sm">
                  Todas as solicitações foram analisadas.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === "payments" && (
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2">
            <div className="bg-primary text-white p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
              <div className="flex flex-col">
                <span className="text-sm font-medium opacity-80 uppercase tracking-widest mb-1">
                  Saldo em Caixa (Depósito Direto)
                </span>
                <span className="text-3xl font-bold">R$ 145.890,00</span>
              </div>
              <button className="bg-white text-primary px-5 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 justify-center hover:bg-white/90">
                <Send className="w-4 h-4" /> Executar Lote de Pagamentos
              </button>
            </div>

            <h3 className="text-lg font-bold text-primary mt-2">
              Prontos para Depósito em Conta
            </h3>

            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                    checked
                    readOnly
                  />
                  <span className="text-sm font-bold text-on-surface">
                    Lote: 25/Outubro/2023
                  </span>
                </div>
                <span className="text-sm font-bold text-secondary">
                  Total: R$ 4.250,00
                </span>
              </div>
              <div className="p-0">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-white text-outline font-medium text-xs uppercase border-b border-slate-100">
                    <tr>
                      <th className="px-4 py-3">Cooperado/Colaborador</th>
                      <th className="px-4 py-3">Banco e Conta</th>
                      <th className="px-4 py-3">Referência</th>
                      <th className="px-4 py-3 text-right">Valor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-semibold text-primary">
                        Lucas Almeida
                      </td>
                      <td className="px-4 py-3 text-on-surface-variant font-mono">
                        Itaú • Ag 1234 • CC 55667-8
                      </td>
                      <td className="px-4 py-3 text-on-surface-variant">
                        Viagem RJ - Set/23
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-on-surface">
                        R$ 1.850,00
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-semibold text-primary">
                        Amanda Fernandes
                      </td>
                      <td className="px-4 py-3 text-on-surface-variant font-mono">
                        Bradesco • Ag 0021 • CC 12345-6
                      </td>
                      <td className="px-4 py-3 text-on-surface-variant">
                        Jantar de Negócios
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-on-surface">
                        R$ 2.400,00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-lg font-bold text-primary border-b border-slate-100 pb-3 mb-4">
                Regras de Aprovação (IA)
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-on-surface">
                      Auto-Aprovar Despesas até
                    </span>
                    <span className="text-xs text-outline">
                      Libera pagamento direto via IA para valores baixos.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-on-surface">
                      R$
                    </span>
                    <input
                      type="number"
                      defaultValue="200"
                      className="w-24 p-2 border border-slate-200 rounded-lg text-sm font-bold text-primary focus:ring-primary focus:border-primary px-3"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-on-surface">
                      Bloquear Gastos de Fim de Semana
                    </span>
                    <span className="text-xs text-outline">
                      Gera alerta de divergência para notas de Sáb/Dom.
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-on-surface">
                      Exigir Foto de Comprovante Limpa
                    </span>
                    <span className="text-xs text-outline">
                      Usa OCR e IA para ler os dados, rejeita se cortado.
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      defaultChecked
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-lg font-bold text-primary border-b border-slate-100 pb-3 mb-4">
                Canais de Pagamento (Integração)
              </h3>
              <p className="text-sm text-on-surface-variant mb-4">
                Configure as contas bancárias para depósito direto na conta
                corrente dos cooperados.
              </p>

              <div className="flex items-center gap-4 p-4 border border-outline-variant rounded-lg bg-surface-container-low mb-3">
                <div className="w-12 h-12 bg-white rounded-md border border-slate-200 flex items-center justify-center font-bold text-primary text-xs">
                  ITAÚ
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-primary">
                    Conta Principal Reembolso
                  </span>
                  <span className="font-mono text-xs text-outline">
                    Agência 0001 • Conta 99999-9
                  </span>
                </div>
                <span className="ml-auto text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                  ON
                </span>
              </div>

              <button className="text-sm font-bold text-secondary hover:underline flex items-center gap-1">
                <Plus className="w-4 h-4" /> Adicionar Nova Conta Pagadora
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Modal Visualização de Comprovante */}
      {isReceiptModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <h3 className="font-bold text-primary flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-outline" />
                Visualização de Comprovante
              </h3>
              <button
                onClick={() => setReceiptModalOpen(false)}
                className="bg-slate-100 hover:bg-slate-200 p-1.5 rounded-full text-on-surface transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto flex flex-col items-center bg-slate-50">
              <div className="w-full aspect-[3/4] bg-slate-200 rounded-lg overflow-hidden border border-slate-300 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://picsum.photos/seed/receipt/600/800"
                  alt="Comprovante"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full mt-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-xs uppercase tracking-widest text-outline mb-2">
                  Resumo LIDO VIA IA
                </h4>
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm text-on-surface-variant">
                    Estabelecimento
                  </span>
                  <span className="text-sm font-bold">
                    Restaurante Fogo de Chão
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm text-on-surface-variant">CNPJ</span>
                  <span className="text-sm font-mono">00.000.000/0001-00</span>
                </div>
                <div className="flex justify-between items-center py-1 mt-2 border-t border-slate-100 pt-2">
                  <span className="text-sm text-on-surface-variant">
                    Valor Total
                  </span>
                  <span className="text-base font-bold text-primary">
                    R$ 120,00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <BottomNavBar />
    </div>
  );
}

// Needed icon for settings tab
function Plus(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
