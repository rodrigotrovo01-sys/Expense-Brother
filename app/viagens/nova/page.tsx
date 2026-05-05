"use client";

import TopAppBar from "@/components/TopAppBar";
import BottomNavBar from "@/components/BottomNavBar";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import {
  MapPin,
  Calendar,
  FileCheck,
  Save,
  ReceiptText,
  Info,
} from "lucide-react";

export default function NovaViagem() {
  const router = useRouter();
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [destination, setDestination] = useState("");
  const dailyAllowance = 200;

  const totalDays = useMemo(() => {
    if (!departureDate || !returnDate) return 0;
    const start = new Date(departureDate);
    const end = new Date(returnDate);

    // Calculate difference in milliseconds
    const diffTime = end.getTime() - start.getTime();

    // Convert to days (include the start day as well, so if start and end are same day it's 1 day)
    // If returning on the same day, that's typically 1 daily allowance.
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 0;
    return diffDays + 1; // 1 day minimum if valid dates
  }, [departureDate, returnDate]);

  const totalValue = totalDays * dailyAllowance;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct email content
    const subject = encodeURIComponent(
      `Solicitação de CAJU Diário - ${destination}`,
    );
    const body = encodeURIComponent(
      `Olá equipe do Financeiro,\n\nSolicito a liberação de CAJU Diário para a seguinte viagem:\n\nDestino: ${destination}\nData de Ida: ${departureDate}\nData de Retorno: ${returnDate}\nDias Totais: ${totalDays}\nValor Total: R$ ${totalValue.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}\n\nA comprovação da viagem foi anexada no sistema.\n\nAtenciosamente,\nRodrigo Trovo`,
    );

    // Open email client (mailto) - Using an anchor tag to bypass iframe constraints
    const mailtoUrl = `mailto:financeiro@brother.com.br?subject=${subject}&body=${body}`;
    const link = document.createElement("a");
    link.href = mailtoUrl;
    link.target = "_top"; // Use _top to ensure it triggers the OS handler outside the iframe
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Simulate flow approval request to Admin and redirect
    setTimeout(() => {
      alert("Solicitação de aprovação de fluxo enviada ao Admin com sucesso!");
      router.push("/viagens");
    }, 1000);
  };

  return (
    <div className="bg-background min-h-screen text-on-surface">
      <TopAppBar title="Solicitação de Viagem" showBack />

      <main className="pt-8 pb-24 px-5 max-w-2xl mx-auto">
        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex gap-3 text-secondary shadow-sm">
          <Info className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <h3 className="font-bold text-sm">Liberação de CAJU Diário</h3>
            <p className="text-xs mt-1 text-on-secondary-fixed-variant">
              Anexe a comprovação da viagem para receber automaticamente a
              liberação do CAJU diário no valor de{" "}
              <strong>R$ 200,00/dia</strong>.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 md:p-8">
          <div className="mb-6 border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-primary">
              Detalhes da Viagem
            </h2>
            <p className="text-sm text-on-surface-variant mt-1">
              Insira as datas e anexe a aprovação.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Destination/Reason */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="destino"
                className="text-sm font-semibold text-on-surface"
              >
                Destino / Motivo
              </label>
              <div className="relative group">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-5 h-5 pointer-events-none" />
                <input
                  type="text"
                  id="destino"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Ex: Reunião Filial SP"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-secondary bg-slate-50 text-sm outline-none transition-all"
                />
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="ida"
                  className="text-sm font-semibold text-on-surface"
                >
                  Data de Ida
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-5 h-5 pointer-events-none" />
                  <input
                    type="date"
                    id="ida"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-secondary bg-slate-50 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="retorno"
                  className="text-sm font-semibold text-on-surface"
                >
                  Data de Retorno
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-5 h-5 pointer-events-none" />
                  <input
                    type="date"
                    id="retorno"
                    value={returnDate}
                    min={departureDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-secondary bg-slate-50 text-sm outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Attachment */}
            <div className="flex flex-col gap-1.5 mt-2">
              <label className="text-sm font-semibold text-on-surface">
                Comprovação da Viagem (Aprovação)
              </label>
              <p className="text-[11px] text-slate-500 mb-1">
                Anexe o e-mail ou documento de aprovação do seu gestor.
              </p>

              <label className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 hover:border-secondary transition-colors group">
                <div className="w-12 h-12 bg-surface-container-low rounded-full flex items-center justify-center mb-3 group-hover:bg-secondary/10 transition-colors">
                  <FileCheck className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-sm font-bold text-primary group-hover:text-secondary mb-1">
                  Clique para enviar ou arraste o arquivo
                </span>
                <span className="text-xs text-on-surface-variant">
                  PDF, JPG ou PNG (Máx 5MB)
                </span>
                <input
                  type="file"
                  required
                  className="hidden"
                  accept=".pdf,image/*"
                />
              </label>
            </div>

            {/* Calculation Result */}
            {totalDays > 0 && (
              <div className="mt-4 bg-surface-container-lowest border border-green-200 rounded-xl p-5 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                <span className="text-sm font-semibold text-on-surface-variant mb-1">
                  Previsão de CAJU Diário
                </span>
                <div className="text-2xl font-bold text-green-700">
                  R${" "}
                  {totalValue.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </div>
                <span className="text-xs text-on-surface-variant mt-1 bg-green-50 px-2 py-1 rounded">
                  {totalDays} {totalDays === 1 ? "dia" : "dias"} × R$ 200,00
                </span>
              </div>
            )}

            {/* Form Actions */}
            <div className="mt-6 flex flex-col md:flex-row gap-3 pt-4 border-t border-slate-100">
              <button
                type="submit"
                className="w-full flex-1 py-3.5 bg-primary text-white rounded-xl font-bold text-base shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 hover:bg-primary-container"
              >
                <Save className="w-5 h-5" />
                Solicitação de Caju
              </button>
            </div>
          </form>
        </section>
      </main>

      <BottomNavBar />
    </div>
  );
}
