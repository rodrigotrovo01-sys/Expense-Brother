"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, ShieldCheck, Mail, Lock, X, CheckCircle2 } from "lucide-react";

export default function Login() {
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [isForgotSent, setIsForgotSent] = useState(false);

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (forgotEmail) {
      setIsForgotSent(true);
    }
  };

  const closeForgotModal = () => {
    setIsForgotModalOpen(false);
    setTimeout(() => {
      setIsForgotSent(false);
      setForgotEmail("");
    }, 300);
  };

  return (
    <>
      <main className="w-full max-w-md mx-auto px-5 py-12 flex flex-col justify-center min-h-screen animate-fade-in relative z-10">
        {/* Header / Logo Area */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary-container uppercase tracking-tight mb-2">
            EXPENSES BROTHER
          </h1>
          <p className="text-sm text-outline">Acesse sua conta corporativa</p>
        </div>

        {/* Login Card */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
          <form className="space-y-6">
            {/* Form Fields */}
            <div className="space-y-4">
              {/* E-mail Corporativo */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold tracking-wide text-primary"
                >
                  E-mail Corporativo
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Seu e-mail"
                    className="w-full h-11 pl-10 pr-4 bg-white border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all text-sm"
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                </div>
              </div>

              {/* Senha */}
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
                    className="w-full h-11 pl-10 pr-10 bg-white border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all text-sm tracking-wider"
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex justify-end mt-1">
                  <button
                    type="button"
                    onClick={() => setIsForgotModalOpen(true)}
                    className="text-xs text-secondary font-medium hover:underline"
                  >
                    Esqueci minha senha
                  </button>
                </div>
              </div>

              {/* Cargo / Perfil para simulação */}
              <div className="flex flex-col gap-1.5 pt-2 border-t border-outline-variant/30">
                <label
                  htmlFor="role"
                  className="text-xs font-semibold tracking-wide text-primary"
                >
                  Simular Login como (Cargo)
                </label>
                <select
                  id="role"
                  name="role"
                  defaultValue=""
                  className="w-full h-11 px-4 bg-slate-50 border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all text-sm appearance-none"
                >
                  <option value="" disabled>
                    Selecionar cargo para teste
                  </option>
                  <option value="executivo">Executivo</option>
                  <option value="financeiro">Financeiro (Acesso Admin)</option>
                  <option value="gerente">Gerente</option>
                  <option value="diretor">Diretor</option>
                </select>
                <p className="text-[10px] text-outline mt-0.5">
                  O sistema detectará seu cargo automaticamente nas próximas
                  vezes.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 space-y-4">
              <Link
                href="/"
                className="w-full bg-primary-container text-on-primary font-bold py-3 rounded-lg shadow-md hover:bg-opacity-90 transition-colors active:scale-[0.98] flex items-center justify-center text-base"
              >
                Entrar
              </Link>

              <div className="flex flex-col items-center gap-2 text-center pt-2 border-t border-outline-variant">
                <Link
                  href="/cadastro"
                  className="text-secondary font-bold text-sm hover:underline transition-colors py-2 mt-2"
                >
                  Criar nova conta
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

      {/* Forgot Password Modal */}
      {isForgotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-sm overflow-hidden animate-zoom-in">
            <div className="p-4 flex justify-between items-center border-b border-outline-variant/30">
              <h2 className="font-semibold text-primary">Recuperar Senha</h2>
              <button
                onClick={closeForgotModal}
                className="text-outline hover:text-primary transition-colors p-1 rounded-full hover:bg-surface-container-low"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {!isForgotSent ? (
                <form onSubmit={handleForgotSubmit} className="space-y-4">
                  <p className="text-sm text-on-surface-variant mb-4">
                    Digite seu e-mail corporativo e enviaremos um link para você
                    redefinir sua senha.
                  </p>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="forgotEmail"
                      className="text-xs font-semibold tracking-wide text-primary"
                    >
                      E-mail Corporativo
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="forgotEmail"
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        placeholder="Seu e-mail"
                        required
                        className="w-full h-11 pl-10 pr-4 bg-white border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all text-sm"
                      />
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-2 bg-secondary text-on-secondary font-bold py-2.5 rounded-lg shadow-md hover:bg-secondary/90 transition-colors active:scale-[0.98] flex items-center justify-center text-sm"
                  >
                    Enviar Link
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-4 space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg text-primary">
                    E-mail Enviado!
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    Se <strong>{forgotEmail}</strong> estiver cadastrado, você
                    receberá um link de recuperação em instantes.
                  </p>
                  <button
                    onClick={closeForgotModal}
                    className="mt-4 text-secondary font-bold text-sm hover:underline"
                  >
                    Voltar ao Login
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
