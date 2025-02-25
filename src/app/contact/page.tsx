"use client";

import React, { useState } from "react";
import { Send, User, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulando envio
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Formulário enviado", { name, email, message });
    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 2 seconds
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setSubmitted(false);
    }, 2000);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4 font-kodchasan">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-pulse rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 animate-pulse rounded-full bg-blue-500/10 blur-3xl delay-700"></div>
      </div>

      <section className="relative w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
        <h2 className="mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-center text-3xl font-bold text-transparent">
          Entre em Contato
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label className="mb-2 block text-sm font-medium text-white/80">
              Nome
            </label>

            <div className="relative">
              <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-purple-300" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-white/20 bg-white/5 py-3 pl-12 pr-4 text-white placeholder-white/50 transition-all duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Seu nome"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="mb-2 block text-sm font-medium text-white/80">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-purple-300" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-white/20 bg-white/5 py-3 pl-12 pr-4 text-white placeholder-white/50 transition-all duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label className="mb-2 block text-sm font-medium text-white/80">
              Mensagem
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-purple-300" />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-white/20 bg-white/5 py-3 pl-12 pr-4 text-white placeholder-white/50 transition-all duration-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={4}
                placeholder="Sua mensagem"
                required
              ></textarea>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`relative w-full transform rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 active:scale-90 disabled:cursor-not-allowed disabled:opacity-70 ${isSubmitting ? "animate-pulse" : ""} ${submitted ? "bg-green-500" : ""} `}
            >
              <span
                className={`flex items-center justify-center gap-2 ${isSubmitting ? "opacity-0" : ""}`}
              >
                <Send className="h-5 w-5" />
                {submitted ? "Enviado!" : "Enviar Mensagem"}
              </span>

              {isSubmitting && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                </div>
              )}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
