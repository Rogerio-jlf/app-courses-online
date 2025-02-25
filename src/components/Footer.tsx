"use client";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";
import "@/styles/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Footer() {
  const [dynamicClass, setDynamicClass] = useState("");

  useEffect(() => {
    // Gere a classe dinâmica apenas no cliente
    setDynamicClass("__variable_2dbf9b __variable_3292b7 antialiased");
  }, []);

  return (
    <footer className={`${dynamicClass} bg-black font-kodchasan text-gray-300`}>
      {/* SEÇÃO, FORMULÁRIO DE CONTATO */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        {/* Container geral da seção */}
        <div className="mx-auto mt-60 max-w-3xl text-center">
          <h1 className="mb-6 bg-gradient-to-r from-slate-500 via-purple-500 to-teal-500 bg-clip-text text-4xl font-extrabold text-transparent">
            Fale Conosco
          </h1>

          <h2 className="mb-10 text-xl font-semibold">
            Tem alguma dúvida, sugestão ou reclamação? Entre em contato conosco
            preenchendo o formulário abaixo.
          </h2>

          <form className="space-y-4">
            {/* Campo Nome */}
            <div className="relative">
              <input
                type="text"
                placeholder="Seu Nome"
                className="text-md w-full rounded-lg border-[1px] border-gray-800 bg-gray-900 p-2 pl-10 text-white placeholder-gray-500 placeholder:italic focus:border-[1px] focus:border-purple-500 focus:outline-none"
              />
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 transform text-xl text-gray-500" />
            </div>

            {/* Campo Email */}
            <div className="relative">
              <input
                type="email"
                placeholder="Seu Email"
                className="text-md w-full rounded-lg border-[1px] border-gray-800 bg-gray-900 p-2 pl-10 text-white placeholder-gray-500 placeholder:italic focus:border-[1px] focus:border-purple-500 focus:outline-none"
              />
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 transform text-xl text-gray-500" />
            </div>

            {/* Campo Mensagem */}
            <div className="relative">
              <textarea
                placeholder="Sua Mensagem"
                className="text-md h-32 w-full resize-none rounded-lg border-[1px] border-gray-800 bg-gray-900 p-2 pl-10 text-white placeholder-gray-500 placeholder:italic focus:border-[1px] focus:border-purple-500 focus:outline-none"
              ></textarea>
              <FaMessage className="absolute left-3 top-3 text-xl text-gray-500" />
            </div>

            {/* Botão Enviar */}
            <button
              type="button"
              className="rounded-lg bg-gradient-to-r from-purple-700 to-blue-700 px-6 py-4 font-semibold text-gray-300 hover:from-purple-950 hover:to-blue-950 hover:italic active:scale-90"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>
      {/* ---------- */}

      {/* LINHA HORIZONTAL */}
      <div className="mx-auto max-w-7xl">
        <hr className="my-12 border-t-2 border-gray-700" />
      </div>
      {/* ---------- */}

      {/* SEÇÃO, PERGUNTAS FREQUENTES */}
      <section className="mb-8 px-4 py-12 sm:px-6 lg:px-8">
        {/* Container, perguntas frequentes */}
        <div className="mx-auto max-w-6xl">
          {/* Título */}
          <h1 className="mb-8 text-center text-4xl font-extrabold">
            Perguntas Frequentes (FAQ)
          </h1>

          {/* Lista de perguntas e respostas */}
          <div className="space-y-4">
            {[
              {
                pergunta: "1. O que é a plataforma?",
                resposta:
                  "É uma plataforma de educação em tecnologia que oferece cursos e formações para desenvolvedores.",
              },
              {
                pergunta: "2. Como posso me inscrever em um plano?",
                resposta:
                  "Você pode se inscrever em um plano clicando no botão 'Inscrever-se' e preenchendo o formulário com suas informações.",
              },
              {
                pergunta: "3. Quais são as formas de pagamento aceitas?",
                resposta:
                  "Aceitamos pagamentos via cartão de crédito, boleto bancário e Pix.",
              },
              {
                pergunta:
                  "4. Posso cancelar minha assinatura a qualquer momento?",
                resposta:
                  "Sim, você pode cancelar sua assinatura a qualquer momento através da sua conta na plataforma.",
              },
              {
                pergunta: "5. Existe algum período de garantia?",
                resposta:
                  "Sim, oferecemos um período de garantia de 14 dias. Se você não estiver satisfeito, devolvemos o seu dinheiro.",
              },
              {
                pergunta: "6. Como acesso os cursos após a inscrição?",
                resposta:
                  "Após a inscrição, você terá acesso imediato aos cursos através da sua conta na plataforma.",
              },
              {
                pergunta: "7. Os cursos são atualizados regularmente?",
                resposta:
                  "Sim, nossos cursos são atualizados regularmente para garantir que você esteja aprendendo as tecnologias mais recentes.",
              },
              {
                pergunta:
                  "8. Posso obter um certificado após concluir um curso?",
                resposta:
                  "Sim, ao concluir um curso, você receberá um certificado de conclusão que pode ser adicionado ao seu portfólio.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="rounded-lg bg-gray-800 p-4 transition-all duration-300 hover:bg-yellow-600 hover:text-gray-950 active:hover:scale-90"
              >
                <summary className="cursor-pointer text-lg font-semibold">
                  {item.pergunta}
                </summary>
                <p className="text-md mt-2">{item.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO, COMECE AGORA */}
      <section className="bg-gradient-to-r from-teal-700 via-purple-700 to-pink-700 px-4 py-12 sm:px-6 lg:px-8">
        {/* Container, comece agora */}
        <div className="mx-auto mb-4 max-w-6xl pb-3 text-center text-gray-300">
          {/* Título */}
          <h1 className="mb-4 text-4xl font-extrabold leading-tight">
            Comece agora a sua jornada em programação
          </h1>

          {/* Descrição */}
          <p className="mb-14 text-xl font-semibold">
            Acelere para o próximo nível da sua carreira e nunca pare de
            aprender
          </p>

          {/* Botões */}
          <div className="flex justify-center gap-4">
            {/* Botão, planos e condições */}
            <Link
              href="/plans"
              className="flex items-center gap-2 rounded-lg bg-gray-300 px-6 py-2 text-lg font-semibold italic text-gray-950 transition-all duration-300 hover:bg-gray-950 hover:text-gray-300 active:scale-90"
            >
              PLANOS E CONDIÇÕES
            </Link>

            {/* Botão, fale conosco */}
            <button className="flex items-center gap-2 rounded-lg bg-transparent px-6 py-2 transition-all duration-300 hover:bg-gray-950 active:scale-90">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-4xl text-green-500"
              />
              <div className="flex flex-col">
                <span className="text-md font-semibold italic">
                  TEM ALGUMA DÚVIDA?
                </span>
                <span className="text-lg font-semibold italic">
                  FALE CONOSCO
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO, NEWSLETTER */}
      <section className="flex justify-center px-4 py-12 sm:px-6 lg:px-8">
        {/* Container, newsletter */}
        <div className="mx-auto mt-4 flex max-w-6xl flex-col items-center justify-between gap-8 pb-2 md:flex-row">
          {/* Newsletter */}
          <div className="mb-4 flex items-center gap-4 md:mb-0 md:w-1/2">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-2 text-4xl text-gray-400"
            />
            <div>
              <h2 className="text-xl font-extrabold tracking-wide text-pink-400">
                Newsletter
              </h2>
              <h3 className="text-3xl">
                Receba conteúdos inéditos e novidades gratuitamente
              </h3>
            </div>
          </div>

          {/* Formulário */}
          <div className="flex flex-col items-center space-y-4 md:w-1/2 md:flex-row md:space-x-4 md:space-y-0">
            <div className="flex flex-col items-center md:items-start">
              <form className="flex w-full items-center space-x-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Digite seu email..."
                    className="placeholder-bg-gray-300 w-[408px] rounded-lg px-4 py-2 pl-10 text-black transition-all placeholder:italic focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute left-3 top-1/2 -translate-y-1/2 transform text-lg text-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-bg-transparent rounded-lg border-2 border-pink-500 px-4 py-2 transition-transform duration-300 hover:bg-pink-500 active:scale-75"
                >
                  Inscrever-se
                </button>
              </form>

              <div className="mt-4 flex items-center gap-2">
                <input type="checkbox" role="checkbox" className="mr-2" />
                <span className="text-xs italic opacity-80">
                  Autorizo o envio de comunicações por e-mail ou qualquer outro
                  meio e concordo com os Termos e Políticas de privacidade.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO, FINAL */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        {/* Container, final */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-center md:grid-cols-4 md:text-left">
          {/* sobre nós */}
          <div>
            <h3 className="mb-4 text-2xl font-extrabold tracking-wide text-pink-400">
              Sobre Nós
            </h3>

            <p className="text-sm opacity-80">
              Criamos soluções inovadoras para transformar ideias em realidade.
            </p>
          </div>

          {/* links rápidos */}
          <div>
            <h3 className="mb-4 text-2xl font-extrabold tracking-wide text-pink-400">
              Links Rápidos
            </h3>

            <ul className="space-y-2">
              <li>
                <Link
                  href="/home"
                  className="inline-block transition duration-200 hover:scale-150 hover:text-pink-500"
                >
                  Início
                </Link>
              </li>

              <li>
                <Link
                  href="/course"
                  className="inline-block transition duration-200 hover:scale-150 hover:text-pink-500"
                >
                  Cursos
                </Link>
              </li>

              <li>
                <Link
                  href="/plans"
                  className="inline-block transition duration-200 hover:scale-150 hover:text-pink-500"
                >
                  Planos
                </Link>
              </li>

              <li>
                <Link
                  href="/community"
                  className="inline-block transition duration-200 hover:scale-150 hover:text-pink-500"
                >
                  Comunidade
                </Link>
              </li>
            </ul>
          </div>

          {/* contato */}
          <div>
            <h3 className="mb-4 text-2xl font-extrabold tracking-wide text-pink-400">
              Contato
            </h3>

            <ul className="space-y-2 opacity-80">
              <li>Email: contato@empresa.com</li>
              <li>Telefone: (31) 1234-5678</li>
              <li>Endereço: Rua Exemplo, 123 - BH/MG</li>
            </ul>
          </div>

          {/* redes sociais */}
          <div>
            <h3 className="mb-4 text-2xl font-extrabold tracking-wide text-pink-400">
              Redes Sociais
            </h3>

            <div className="flex justify-center space-x-4 rounded-lg bg-gray-800 p-4 shadow-lg md:justify-center">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-150 hover:text-pink-500"
              >
                <FaFacebook size={24} />
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-150 hover:text-pink-500"
              >
                <FaTwitter size={24} />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-150 hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-150 hover:text-pink-500"
              >
                <FaLinkedin size={24} />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-150 hover:text-pink-500"
              >
                <FaGithub size={24} />
              </Link>

              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-150 hover:text-pink-500"
              >
                <FaTiktok size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* LINHA HORIZONTAL */}
        <div className="mx-auto max-w-6xl">
          <hr className="my-12 border-t-2 border-gray-700" />
        </div>

        {/* rodapé */}
        <div className="text-center">
          <p className="text-sm opacity-60">
            &copy; {new Date().getFullYear()} Empresa. Todos os direitos
            reservados.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg border-2 border-pink-500 bg-transparent px-4 py-2 transition-transform duration-300 hover:bg-pink-500 active:scale-90"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
      {/* ---------- */}
    </footer>
  );
}
