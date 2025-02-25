"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaCreditCard,
  FaFileInvoice,
  FaMoneyCheckAlt,
  FaPaypal,
} from "react-icons/fa";

export default function PlansPage() {
  const [dynamicClass, setDynamicClass] = useState("");

  useEffect(() => {
    // Gere a classe dinâmica apenas no cliente
    setDynamicClass("__variable_2dbf9b __variable_3292b7 antialiased");
  }, []);

  return (
    <main className={`${dynamicClass} bg-neutral-950/95 font-kodchasan`}>
      {/* SEÇÃO - HEADER / CARDS PLANOS */}
      <section className="mt-24 px-4 py-12 sm:px-6 lg:px-8">
        {/* Container geral da seção */}
        <div className="mx-auto max-w-6xl">
          {/* Títulos */}
          <header className="text-center">
            <h1 className="bg-gradient-to-t from-blue-500 to-blue-700 bg-clip-text text-6xl leading-tight text-transparent">
              Planos de Assinatura
            </h1>

            <p className="mb-14 text-2xl italic text-white">
              Escolha o plano ideal para você e aproveite todos os benefícios
              exclusivos.
            </p>
          </header>

          {/* SEÇÃO DE DESTAQUE DE BENEFÍCIOS */}
          <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Benefício 1 */}
            <div className="animate-fade-in-up rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-center shadow-lg shadow-black transition-all duration-300 hover:scale-105">
              <h3 className="mb-2 text-xl font-bold text-white">
                Acesso Ilimitado
              </h3>
              <p className="italic text-white">
                Tenha acesso a todos os cursos, materiais e atualizações.
              </p>
            </div>

            {/* Benefício 2 */}
            <div className="animate-fade-in-down rounded-2xl bg-gradient-to-r from-green-600 to-green-800 p-6 text-center shadow-lg shadow-black transition-all duration-300 hover:scale-105">
              <h3 className="mb-2 text-xl font-bold text-white">
                Mentorias Exclusivas
              </h3>
              <p className="italic text-white">
                Aprenda com especialistas e tire suas dúvidas em tempo real.
              </p>
            </div>

            {/* Benefício 3 */}
            <div className="animate-fade-in-down rounded-2xl bg-gradient-to-r from-yellow-600 to-yellow-800 p-6 text-center shadow-lg shadow-black transition-all duration-300 hover:scale-105">
              <h3 className="mb-2 text-xl font-bold text-white">
                Certificados Reconhecidos
              </h3>
              <p className="italic text-white">
                Receba certificados que agregam valor ao seu currículo.
              </p>
            </div>

            {/* Benefício 4 */}
            <div className="animate-fade-in-up rounded-2xl bg-gradient-to-r from-purple-600 to-purple-800 p-6 text-center shadow-lg shadow-black transition-all duration-300 hover:scale-105">
              <h3 className="mb-2 text-xl font-bold text-white">
                Comunidade VIP
              </h3>
              <p className="italic text-white">
                Conecte-se com outros alunos e profissionais da área.
              </p>
            </div>
          </div>

          {/* Cards dos planos */}
          <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Plano básico */}
            <article className="animate-fade-in-left flex flex-col justify-between rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-6 shadow-md shadow-white">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Plano Básico</h2>

                <p className="mb-4 font-semibold">
                  Acesso a conteúdos gratuitos e suporte limitado.
                </p>

                <ul className="mb-4 list-inside list-disc font-semibold italic">
                  <li>Acesso a cursos gratuitos</li>
                  <li>Suporte básico</li>
                  <li>Comunidade de estudantes</li>
                </ul>
              </div>

              <p className="mb-4 text-3xl font-bold text-black">R$ 29,90/mês</p>

              <Link
                href="/plano/basico"
                className="text-md mt-auto font-semibold transition duration-200 hover:italic hover:text-white"
              >
                Escolher plano →
              </Link>
            </article>

            {/* Plano padrão */}
            <article className="animate-fade-in-up flex flex-col justify-between rounded-2xl bg-gradient-to-r from-green-600 to-green-800 p-6 shadow-md shadow-white">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Plano Padrão</h2>

                <p className="mb-4 font-semibold">
                  Acesso a todos os cursos e suporte prioritário.
                </p>

                <ul className="mb-4 list-inside list-disc font-semibold italic">
                  <li>Acesso a todos os cursos</li>
                  <li>Suporte prioritário</li>
                  <li>Certificado de conclusão</li>
                </ul>
              </div>

              <p className="mb-4 text-3xl font-bold">R$ 59,90/mês</p>

              <Link
                href="/plano/padrao"
                className="text-md mt-auto font-semibold transition duration-200 hover:italic hover:text-white"
              >
                Escolher plano →
              </Link>
            </article>

            {/* Plano Premium */}
            <article className="animate-fade-in-right flex flex-col justify-between rounded-2xl bg-gradient-to-r from-yellow-600 to-yellow-800 p-6 shadow-md shadow-white">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Plano Premium</h2>

                <p className="mb-4 font-semibold">
                  Acesso ilimitado, mentorias e certificado premium.
                </p>

                <ul className="mb-4 list-inside list-disc font-semibold italic">
                  <li>Acesso ilimitado a todos os cursos</li>
                  <li>Mentorias individuais</li>
                  <li>Certificado premium</li>
                  <li>Acesso a eventos exclusivos</li>
                </ul>
              </div>

              <p className="mb-4 text-3xl font-bold">R$ 99,90/mês</p>

              <Link
                href="/plano/premium"
                className="text-md mt-auto font-semibold transition duration-200 hover:italic hover:text-white"
              >
                Escolher plano →
              </Link>
            </article>
          </div>
        </div>
      </section>
      {/* ---------- */}

      {/* Estilos de Animação */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.9s ease-out;
        }
      `}</style>
      {/* ---------- */}

      {/* Estilos de Animação */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.9s ease-out;
        }
      `}</style>
      {/* ---------- */}

      {/* Estilos de Animação */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translatex(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.9s ease-out;
        }
      `}</style>
      {/* ---------- */}

      {/* Estilos de Animação */}
      <style jsx>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translatex(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.9s ease-out;
        }
      `}</style>
      {/* ---------- */}

      {/* SEÇÃO - TABELA COMPARATIVA */}
      <section className="mb-20 bg-gray-950 p-6">
        <h2 className="mb-4 mt-10 text-center text-5xl font-extralight text-white">
          Comparativo de Planos
        </h2>

        <p className="mb-14 text-center text-lg font-semibold text-white">
          Compare os benefícios de cada plano e escolha o que melhor se encaixa
          nas suas necessidades.
        </p>

        {/* Tabela */}
        <div className="m-auto mb-14 max-w-6xl overflow-x-auto rounded-2xl bg-black p-6 shadow-md shadow-teal-500">
          <table className="w-full min-w-[600px]">
            {/* Cabeçalho */}
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-4 text-left text-xl font-semibold text-yellow-300 underline">
                  Recurso
                </th>
                <th className="py-4 text-xl font-semibold text-yellow-300 underline">
                  Básico
                </th>
                <th className="py-4 text-xl font-semibold text-yellow-300 underline">
                  Padrão
                </th>
                <th className="py-4 text-xl font-semibold text-yellow-300 underline">
                  Premium
                </th>
              </tr>
            </thead>

            {/* Corpo da Tabela */}
            <tbody>
              {/* Linha 1 */}
              <tr className="border-b border-gray-700">
                <td className="py-4 text-lg font-semibold text-white">
                  Acesso a cursos gratuitos
                </td>
                <td className="py-4 text-center">
                  <span className="text-2xl">✔️</span>
                </td>
                <td className="py-4 text-center">
                  <span className="text-2xl">✔️</span>
                </td>
                <td className="py-4 text-center">
                  <span className="text-2xl">✔️</span>
                </td>
              </tr>

              {/* Linha 2 */}
              <tr className="border-b border-gray-700">
                <td className="py-4 text-lg font-semibold text-white">
                  Acesso a todos os cursos
                </td>
                <td className="py-4 text-center">
                  <span className="text-2xl">❌</span>
                </td>
                <td className="py-4 text-center">
                  <span className="text-2xl">✔️</span>
                </td>
                <td className="py-4 text-center">
                  <span className="text-2xl">✔️</span>
                </td>
              </tr>

              {/* Linha 3 */}
              <tr className="border-b border-gray-700">
                <td className="py-4 text-lg font-semibold text-white">
                  Suporte prioritário
                </td>
                <td className="py-4 text-center">
                  <span className="text-2xl">❌</span>
                </td>
                <td className="py-4 text-center">
                  <span className="text-2xl">✔️</span>
                </td>
                <td className="py-4 text-center">
                  <span className="text-2xl">✔️</span>
                </td>
              </tr>

              {/* Linha 4 */}
              <tr className="border-b border-gray-700">
                <td className="py-4 text-lg font-semibold text-white">
                  Mentorias individuais
                </td>
                <td className="py-4 text-center">
                  <span className="text-2xl">❌</span>
                </td>
                <td className="py-4 text-center">
                  <span className="text-2xl">❌</span>
                </td>
                <td className="py-4 text-center">
                  <span className="text-2xl">✔️</span>
                </td>
              </tr>

              {/* Linha 5 */}
              <tr>
                <td className="py-4 text-lg font-semibold text-white">
                  Certificado premium
                </td>
                <td className="py-4 text-center">
                  <span className="text-2xl">❌</span>
                </td>
                <td className="py-4 text-center">
                  <span className="text-2xl">❌</span>
                </td>
                <td className="py-4 text-center">
                  <span className="text-2xl">✔️</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO - MÉTRICAS DE IMPACTO */}
      <section className="mx-auto mb-20 max-w-6xl rounded-2xl bg-gradient-to-t from-teal-800 to-gray-950 p-10 text-center shadow-lg">
        <h2 className="mb-4 text-5xl font-extralight text-white">
          Nossas Métricas de Impacto
        </h2>

        <p className="mb-14 text-xl font-semibold italic text-white">
          Conheça os números que nos motivam a continuar transformando vidas
          através da educação.
        </p>

        {/* Container das Métricas */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Métrica 1 */}
          <div className="rounded-2xl bg-white/5 p-6 shadow-md shadow-black backdrop-blur-sm">
            <h3 className="text-5xl font-semibold text-yellow-500">10.000+</h3>
            <p className="mt-2 text-lg font-semibold italic text-white">
              Alunos Formados
            </p>
          </div>

          {/* Métrica 2 */}
          <div className="rounded-2xl bg-white/5 p-6 shadow-md shadow-black backdrop-blur-sm">
            <h3 className="text-5xl font-semibold text-yellow-500">95%</h3>
            <p className="mt-2 text-lg font-semibold text-white">
              Taxa de Satisfação
            </p>
          </div>

          {/* Métrica 3 */}
          <div className="rounded-2xl bg-white/5 p-6 shadow-md shadow-black backdrop-blur-sm">
            <h3 className="text-5xl font-semibold text-yellow-500">50.000+</h3>
            <p className="mt-2 text-lg font-semibold text-white">
              Horas de Conteúdo
            </p>
          </div>

          {/* Métrica 4 */}
          <div className="rounded-2xl bg-white/5 p-6 shadow-md shadow-black backdrop-blur-sm">
            <h3 className="text-5xl font-semibold text-yellow-500">1.000+</h3>
            <p className="mt-2 text-lg font-semibold text-white">
              Projetos Concluídos
            </p>
          </div>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO - ACESSO A EMPREGOS */}
      <section className="mx-auto mb-20 max-w-6xl rounded-2xl bg-gradient-to-t from-gray-950 to-teal-800 p-10 text-center shadow-lg">
        <h2 className="mb-4 text-5xl font-extralight text-white">
          Conquiste Seu Próximo Emprego
        </h2>

        <p className="mb-14 text-xl font-semibold italic text-white">
          Nossa plataforma não só ensina, mas também conecta você a
          oportunidades reais no mercado de trabalho.
        </p>

        {/* Cards de Benefícios */}
        <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl bg-white/5 p-6 text-center shadow-md shadow-black backdrop-blur-sm transition-all duration-200 hover:scale-105">
            <h3 className="mb-4 text-2xl font-semibold text-yellow-500">
              Empresas Parceiras
            </h3>
            <p className="mb-4 text-lg italic text-white">
              Conectamos você a empresas que buscam profissionais qualificados.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white/5 p-6 text-center shadow-md shadow-black backdrop-blur-sm transition-all duration-200 hover:scale-105">
            <h3 className="mb-4 text-2xl font-semibold text-yellow-500">
              Feiras de Emprego
            </h3>
            <p className="mb-4 text-lg italic text-white">
              Participe de feiras de emprego exclusivas para alunos da
              plataforma.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white/5 p-6 text-center shadow-md shadow-black backdrop-blur-sm transition-all duration-200 hover:scale-105">
            <h3 className="mb-4 text-2xl font-semibold text-yellow-500">
              Mentoria de Carreira
            </h3>
            <p className="mb-4 text-lg italic text-white">
              Receba orientação profissional para se destacar em processos
              seletivos.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <p className="mb-10 text-lg font-semibold text-white">
            🚀 Pronto para dar o próximo passo na sua carreira?
          </p>
          <Link
            href="#"
            className="inline-block rounded-lg bg-green-600 px-8 py-3 text-xl font-semibold text-black transition-all duration-200 hover:bg-green-950 hover:text-white active:scale-90"
          >
            Comece Agora
          </Link>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO - CONTEÚDO GRATUITO */}
      <section className="bg-gray-950 p-10">
        <h2 className="m-auto mb-4 mt-8 max-w-6xl text-5xl font-extralight text-white">
          Experimente Nossos Conteúdos Gratuitos
        </h2>

        <p className="m-auto mb-14 max-w-6xl text-xl font-semibold italic text-white">
          Comece agora mesmo com cursos e materiais gratuitos para aprender sem
          compromisso.
        </p>

        {/* Cards de Conteúdo Gratuito */}
        <div className="m-auto mb-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl bg-pink-700/70 p-6 text-center backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Curso de Introdução
            </h3>
            <p className="mb-4 text-lg text-white">
              Aprenda os conceitos básicos com este curso introdutório.
            </p>
            <Link
              href="#"
              className="inline-block rounded-lg bg-white/60 px-6 py-2 font-semibold text-black transition-all duration-200 hover:bg-pink-950 hover:text-white active:scale-90"
            >
              Acessar Curso
            </Link>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-pink-700/70 p-6 text-center backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-semibold text-white">
              E-book Grátis
            </h3>
            <p className="mb-4 text-lg text-white">
              Baixe nosso e-book exclusivo com dicas para iniciantes.
            </p>
            <Link
              href="#"
              className="inline-block rounded-lg bg-white/60 px-6 py-2 font-semibold text-black transition-all duration-200 hover:bg-pink-950 hover:text-white active:scale-90"
            >
              Baixar E-book
            </Link>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-pink-700/70 p-6 text-center backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Aula Demonstrativa
            </h3>
            <p className="mb-4 text-lg text-white">
              Assista a uma aula gratuita e veja a qualidade do nosso conteúdo.
            </p>
            <Link
              href="#"
              className="inline-block rounded-lg bg-white/60 px-6 py-2 font-semibold text-black transition-all duration-200 hover:bg-pink-950 hover:text-white active:scale-90"
            >
              Assistir Aula
            </Link>
          </div>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO - FORMAS DE PAGAMENTO */}
      <section className="bg-gradient-to-r from-purple-950 to-blue-950 p-10 text-center">
        <h2 className="mb-4 mt-8 text-5xl font-extralight text-white">
          Formas de Pagamento
        </h2>

        <p className="mb-14 text-xl font-semibold italic text-white">
          Oferecemos várias opções de pagamento seguras e flexíveis para sua
          comodidade.
        </p>

        {/* Cards de Formas de Pagamento */}
        <div className="m-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Cartão de Crédito */}
          <div className="rounded-2xl bg-white/10 p-6 text-center shadow-md shadow-black backdrop-blur-sm transition-all duration-300 hover:scale-105">
            <FaCreditCard className="mx-auto mb-4 text-6xl text-yellow-500" />
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Cartão de Crédito
            </h3>
            <p className="mb-4 text-lg italic text-white">
              Parcele em até 10x sem juros. Aceitamos todas as bandeiras.
            </p>
          </div>

          {/* PayPal */}
          <div className="rounded-2xl bg-white/10 p-6 text-center shadow-md shadow-black backdrop-blur-sm transition-all duration-200 hover:scale-105">
            <FaPaypal className="mx-auto mb-4 text-6xl text-yellow-500" />
            <h3 className="mb-4 text-2xl font-semibold text-white">PayPal</h3>
            <p className="mb-4 text-lg italic text-white">
              Pague com segurança usando sua conta PayPal.
            </p>
          </div>

          {/* Pix */}
          <div className="rounded-2xl bg-white/10 p-6 text-center shadow-md shadow-black backdrop-blur-sm transition-all duration-200 hover:scale-105">
            <FaMoneyCheckAlt className="mx-auto mb-4 text-6xl text-yellow-500" />
            <h3 className="mb-4 text-2xl font-semibold text-white">Pix</h3>
            <p className="mb-4 text-lg italic text-white">
              Pagamento instantâneo e seguro com Pix.
            </p>
          </div>

          {/* Boleto Bancário */}
          <div className="rounded-2xl bg-white/10 p-6 text-center shadow-md shadow-black backdrop-blur-sm transition-all duration-200 hover:scale-105">
            <FaFileInvoice className="mx-auto mb-4 text-6xl text-yellow-500" />
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Boleto Bancário
            </h3>
            <p className="mb-4 text-lg italic text-white">
              Pague com boleto e tenha até 3 dias úteis para processamento.
            </p>
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="mb-8 text-center">
          <p className="mb-4 text-lg font-semibold italic text-white">
            💳 Oferecemos{" "}
            <span className="text-yellow-500">descontos especiais</span> para
            pagamentos anuais.
          </p>

          <p className="mb-4 text-lg font-semibold italic text-white">
            🔒 Todas as transações são{" "}
            <span className="text-yellow-500">100% seguras</span> e
            criptografadas.
          </p>

          <p className="text-lg font-semibold italic text-white">
            📄 Emitimos <span className="text-yellow-500">nota fiscal</span>{" "}
            para todos os pagamentos.
          </p>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO - SUPORTE AO ALUNO */}
      <section className="bg-gray-950 p-10 text-center shadow-lg">
        <h2 className="m-auto mb-4 mt-8 max-w-6xl text-left text-5xl font-extralight text-white">
          Suporte ao Aluno
        </h2>

        <p className="m-auto mb-14 max-w-6xl text-left text-xl font-semibold italic text-white">
          Estamos aqui para ajudar você em cada etapa da sua jornada de
          aprendizado.
        </p>

        {/* Cards de Canais de Suporte */}
        <div className="m-auto mb-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Chat Online */}
          <div className="rounded-2xl bg-purple-900 p-6 text-center shadow-md shadow-purple-500 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-semibold text-purple-400">
              Chat Online
            </h3>
            <p className="mb-4 text-lg italic text-purple-200">
              Converse com nosso suporte em tempo real. Disponível 24 horas,
              todos os dias.
            </p>
            <Link
              href="#"
              className="inline-block rounded-lg bg-purple-700 px-6 py-2 font-semibold text-white transition-all duration-200 hover:bg-gray-950"
            >
              Iniciar Chat
            </Link>
          </div>

          {/* E-mail */}
          <div className="rounded-2xl bg-blue-900 p-6 text-center shadow-md shadow-blue-500 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-bold text-blue-400">E-mail</h3>
            <p className="mb-4 text-lg italic text-blue-200">
              Envie suas dúvidas por e-mail e receba uma resposta em até 24
              horas.
            </p>
            <Link
              href="#"
              className="inline-block rounded-lg bg-blue-700 px-6 py-2 font-semibold text-white transition-all duration-200 hover:bg-gray-950"
            >
              Enviar E-mail
            </Link>
          </div>

          {/* Central de Ajuda */}
          <div className="rounded-2xl bg-green-900 p-6 text-center shadow-md shadow-green-500 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-bold text-green-400">
              Central de Ajuda
            </h3>
            <p className="mb-4 text-lg italic text-green-200">
              Acesse artigos, tutoriais e FAQs para resolver suas dúvidas
              rapidamente.
            </p>
            <Link
              href="#"
              className="inline-block rounded-lg bg-green-700/70 px-6 py-2 font-semibold text-white transition-all duration-200 hover:bg-gray-950"
            >
              Acessar Central
            </Link>
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="text-center">
          <p className="m-auto mb-4 max-w-6xl text-left text-lg font-semibold text-white">
            🕒 Tempo médio de resposta:{" "}
            <span className="text-yellow-500">menos de 1 hora</span>.
          </p>
          <p className="m-auto mb-4 max-w-6xl text-left text-lg font-semibold text-white">
            📞 Precisa de ajuda urgente? Ligue para{" "}
            <span className="text-yellow-500">(11) 1234-5678</span>.
          </p>
          <p className="m-auto max-w-6xl text-left text-lg font-semibold text-white">
            📅 Agende uma{" "}
            <span className="text-yellow-500">mentoria individual</span> com
            nossos especialistas.
          </p>
        </div>
      </section>
      {/* ---------- */}

      <Footer />
    </main>
  );
}
