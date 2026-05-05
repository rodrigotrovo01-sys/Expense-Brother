"use client";

import Link from "next/link";
import { Camera, Eye, ShieldCheck, User } from "lucide-react";

export default function Cadastro() {
  return (
    <main className="w-full max-w-md mx-auto px-5 py-12 flex flex-col justify-center min-h-screen animate-fade-in relative z-10">
      {/* Header / Logo Area */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary-container uppercase tracking-tight mb-2">
          EXPENSES BROTHER
        </h1>
        <p className="text-sm text-outline">
          Crie sua conta corporativa para começar
        </p>
      </div>

      {/* Registration Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
        <form className="space-y-6">
          {/* Profile Picture Section */}
          <div className="flex flex-col items-center mb-4">
            <div className="relative group cursor-pointer inline-block">
              <div className="w-24 h-24 rounded-full bg-surface-container-high border-2 border-dashed border-outline flex items-center justify-center overflow-hidden transition-all group-hover:border-primary-container">
                <User className="w-10 h-10 text-outline" />
              </div>
              <label
                htmlFor="profile-upload"
                className="absolute bottom-0 right-0 bg-primary-container text-on-primary w-8 h-8 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-transform"
              >
                <Camera className="w-4 h-4" />
                <input
                  type="file"
                  id="profile-upload"
                  accept="image/*"
                  className="hidden"
                />
              </label>
            </div>
            <span className="text-xs font-medium text-outline mt-2">
              Foto de perfil
            </span>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Nome Completo */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="fullname"
                className="text-xs font-semibold tracking-wide text-primary"
              >
                Nome Completo
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Ex: João Silva"
                className="w-full h-11 px-4 bg-white border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all text-sm"
              />
            </div>

            {/* E-mail Corporativo */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold tracking-wide text-primary"
              >
                E-mail Corporativo
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="nome.sobrenome"
                  className="w-full h-11 pl-4 pr-36 bg-white border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all text-sm"
                />
                <div className="absolute right-3 flex items-center pointer-events-none border-l border-outline-variant pl-3 h-6">
                  <span className="text-sm font-semibold text-outline">
                    @brother.com.br
                  </span>
                </div>
              </div>
            </div>

            {/* Cargo */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="role"
                className="text-xs font-semibold tracking-wide text-primary"
              >
                Cargo / Perfil
              </label>
              <select
                id="role"
                name="role"
                defaultValue=""
                className="w-full h-11 px-4 bg-white border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all text-sm appearance-none"
              >
                <option value="" disabled>
                  Selecione seu cargo
                </option>
                <option value="executivo">Executivo</option>
                <option value="financeiro">Financeiro</option>
                <option value="gerente">Gerente</option>
                <option value="diretor">Diretor</option>
              </select>
            </div>

            {/* Senhas */}
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold tracking-wide text-primary"
                >
                  Senha
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    className="w-full h-11 pl-4 pr-10 bg-white border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all text-sm tracking-wider"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="confirm_password"
                  className="text-xs font-semibold tracking-wide text-primary"
                >
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="••••••••"
                  className="w-full h-11 px-4 bg-white border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all text-sm tracking-wider"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 space-y-4">
            <Link
              href="/"
              className="w-full bg-primary-container text-on-primary font-bold py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-colors active:scale-[0.98] flex items-center justify-center text-base"
            >
              Criar Conta
            </Link>

            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-[11px] text-outline px-4">
                Ao criar conta, você concorda com nossos{" "}
                <a
                  href="#"
                  className="text-secondary font-bold hover:underline"
                >
                  Termos e Condições
                </a>
                .
              </p>
              <Link
                href="/login"
                className="text-primary font-bold text-sm hover:text-secondary transition-colors py-2 mt-2"
              >
                Já tenho uma conta
              </Link>
            </div>
          </div>
        </form>
      </div>

      {/* Footer Visual Decor */}
      <div className="mt-8 flex justify-center items-center gap-4 opacity-40">
        <div className="h-[1px] bg-outline flex-1"></div>
        <ShieldCheck className="w-6 h-6 text-outline" />
        <div className="h-[1px] bg-outline flex-1"></div>
      </div>
      <p className="text-center text-[10px] text-outline mt-3 uppercase tracking-widest font-bold">
        Ambiente Financeiro Seguro
      </p>

      {/* Decorative Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-surface-container rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-100 rounded-full blur-[120px] opacity-30"></div>
      </div>
    </main>
  );
}
