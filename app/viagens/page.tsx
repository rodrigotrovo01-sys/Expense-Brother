"use client";

import TopAppBar from "@/components/TopAppBar";
import BottomNavBar from "@/components/BottomNavBar";
import Link from "next/link";
import { useState } from "react";
import {
  Plane,
  ChevronRight,
  Plus,
  MapPin,
  CalendarDays,
  Search,
  CreditCard,
} from "lucide-react";

export default function Viagens() {
  const [searchTerm, setSearchTerm] = useState("");

  const allTrips = [
    {
      id: 1,
      destination: "São Paulo - SP",
      departure: "15 Set 2023",
      returnDate: "20 Set 2023",
      allowance: "1.000,00", // 5 days * 200
      status: "Aprovado",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      destination: "Rio de Janeiro - RJ",
      departure: "05 Nov 2023",
      returnDate: "08 Nov 2023",
      allowance: "600,00", // 3 days * 200
      status: "Pendente",
      statusColor: "bg-amber-100 text-amber-800",
    },
    {
      id: 3,
      destination: "Curitiba - PR",
      departure: "10 Ago 2023",
      returnDate: "12 Ago 2023",
      allowance: "400,00",
      status: "Efetivada",
      statusColor: "bg-slate-100 text-slate-800",
      paymentDate: "14 Ago 2023",
    },
    {
      id: 4,
      destination: "Belo Horizonte - MG",
      departure: "20 Jul 2023",
      returnDate: "25 Jul 2023",
      allowance: "1.200,00",
      status: "Efetivada",
      statusColor: "bg-slate-100 text-slate-800",
      paymentDate: "27 Jul 2023",
    },
  ];

  const activeTrips = allTrips.filter((trip) => trip.status !== "Efetivada");
  const completedPayments = allTrips.filter(
    (trip) =>
      trip.status === "Efetivada" &&
      (trip.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trip.departure.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TopAppBar title="Viagens" showBack />

      <main className="flex-1 w-full max-w-5xl mx-auto px-5 py-6 flex flex-col gap-6 pb-24">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-primary">
                Minhas Viagens
              </h2>
              <p className="text-sm text-on-surface-variant mt-1">
                Gerencie suas viagens e solicitações de CAJU diário.
              </p>
            </div>
            <Link
              href="/viagens/nova"
              className="bg-primary text-white p-3 rounded-full shadow-md hover:bg-primary-container transition-colors shrink-0"
            >
              <Plus className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Search for Completed Payments */}
        <div className="bg-surface-container rounded-2xl p-5 border border-outline-variant shadow-sm">
          <h3 className="text-sm font-bold text-primary mb-3 flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Pagamentos Já Efetuados
          </h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
            <input
              type="text"
              placeholder="Buscar histórico de pagamentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-11 pl-10 pr-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm shadow-sm"
            />
          </div>

          {searchTerm && (
            <div className="mt-4 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
              {completedPayments.length > 0 ? (
                completedPayments.map((payment) => (
                  <div
                    key={payment.id}
                    className="bg-white border border-slate-100 p-3 rounded-lg flex items-center justify-between shadow-sm"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-primary">
                        {payment.destination}
                      </span>
                      <span className="text-[10px] text-outline font-medium tracking-tight">
                        PAGO EM: {payment.paymentDate}
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-bold text-sm text-secondary">
                        R$ {payment.allowance}
                      </span>
                      <span className="text-[10px] font-bold text-green-700 bg-green-50 px-1.5 rounded uppercase">
                        Efetuado
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-xs text-outline py-2 font-medium">
                  Nenhum pagamento encontrado para &quot;{searchTerm}&quot;
                </p>
              )}
            </div>
          )}
        </div>

        {/* Trips List */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold text-primary px-1">
            Próximas Viagens
          </h3>
          {activeTrips.length > 0 ? (
            activeTrips.map((trip) => (
              <div
                key={trip.id}
                className="bg-white border border-slate-200 p-5 rounded-xl flex flex-col hover:border-secondary/50 hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                      <Plane className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-primary group-hover:text-secondary transition-colors">
                        {trip.destination}
                      </h3>
                      <span
                        className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${trip.statusColor}`}
                      >
                        {trip.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-2 pt-3 border-t border-slate-100">
                  <div className="flex items-center text-sm text-on-surface-variant">
                    <CalendarDays className="w-4 h-4 mr-2 text-outline" />
                    <span className="font-medium">{trip.departure}</span>
                    <span className="mx-2 text-outline">até</span>
                    <span className="font-medium">{trip.returnDate}</span>
                  </div>

                  <div className="flex items-end justify-between mt-2">
                    <div className="flex flex-col">
                      <span className="text-[11px] font-semibold text-outline uppercase tracking-wider">
                        CAJU Liberado
                      </span>
                      <span className="font-bold text-lg text-secondary">
                        R$ {trip.allowance}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-outline group-hover:text-secondary transition-colors" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 mt-4 text-center text-sm text-on-surface-variant border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 flex flex-col items-center">
              <Plane className="w-10 h-10 text-outline/50 mb-3" />
              <p className="font-semibold text-on-surface mb-1">
                Nenhuma viagem encontrada
              </p>
              <p className="text-xs">
                Clique no botão + para solicitar uma nova viagem.
              </p>
            </div>
          )}
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
}
