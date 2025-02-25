"use client";

import Link from "next/link";
import Image from "next/image";
import { FaBook, FaDollarSign, FaSignInAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [dynamicClass, setDynamicClass] = useState("");

  useEffect(() => {
    // Gere a classe dinâmica apenas no cliente
    setDynamicClass("__variable_2dbf9b __variable_3292b7 antialiased");
  }, []);
  interface Routes {
    [key: string]: string;
  }

  const getRoute = (item: string): string => {
    const routes: Routes = {
      Cursos: "course",
      Planos: "plans",
    };
    return routes[item] || item.toLowerCase();
  };

  return (
    <>
      {/* CONTAINER PRINCIPAL DA PÁGINA */}
      <div
        className={`${dynamicClass} relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-t from-blue-950 via-pink-950 to-blue-950 font-kodchasan`}
      >
        {/* IMAGEM DE FUNDO */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/escola.jpg"
            alt="Descrição da Imagem"
            layout="fill"
            objectFit="cover"
            className="h-full w-full opacity-80"
          />
        </div>

        {/* HEADER */}
        <header className="fixed top-0 z-20 w-full bg-black shadow-sm backdrop-blur-md">
          {/* Container principal do header  */}
          <div className="mx-auto flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-20">
            {/* Título */}
            <h1 className="text-3xl font-bold text-white">MeuLogoTipo</h1>

            {/* Navegação */}
            <nav className="hidden items-center gap-6 lg:flex">
              <ul className="flex items-center gap-6">
                {["Cursos", "Planos"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${getRoute(item)}`}
                      className="group relative flex items-center gap-2 text-lg font-medium text-white hover:italic hover:text-pink-500"
                    >
                      {item === "Cursos" ? <FaBook /> : <FaDollarSign />}
                      {item}
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Barra vertical */}
              <div className="h-10 w-px bg-white"></div>

              {/* Botão de Login */}
              <Link
                href="/login"
                className="flex items-center gap-2 rounded-lg bg-pink-600 px-6 py-2 text-lg font-semibold text-white transition-colors duration-200 hover:bg-pink-900 active:scale-90"
              >
                <FaSignInAlt />
                Entrar
              </Link>
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 py-12">
          {/* SEÇÃO - TÍTULOS / BOTÃO */}
          <section className="mt-24 text-center">
            <h1 className="m-auto mb-4 max-w-3xl bg-gradient-to-r from-pink-900 to-purple-900 bg-clip-text text-5xl font-extrabold text-transparent">
              A escola de tecnologia,
              <span className="bg-black bg-clip-text text-5xl font-extrabold text-transparent">
                {" "}
                onde
              </span>
              <span className="bg-gradient-to-r from-pink-900 to-purple-900 bg-clip-text text-5xl font-extrabold text-transparent">
                {" "}
                se aprende de{" "}
              </span>
              <span className="bg-black bg-clip-text text-5xl font-extrabold text-transparent">
                verdade!
              </span>
            </h1>

            <p className="mb-14 text-2xl font-bold italic text-black">
              Explore nossos cursos, planos e recursos para alcançar seus
              objetivos de aprendizado.
            </p>

            <div className="mb-14 flex justify-center">
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 text-xl font-semibold text-white transition-all duration-200 hover:from-pink-900 hover:to-purple-900 active:scale-90"
              >
                Comece Agora
              </Link>
            </div>
          </section>
          {/* ---------- */}

          {/* SEÇÃO - CARDS */}
          <section className="grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <article className="flex h-48 flex-col justify-center rounded-lg bg-pink-600/60 p-6 shadow-lg shadow-black">
              <h2 className="mb-4 text-2xl font-bold text-pink-950">
                Cursos Online
              </h2>

              <p className="text-left font-semibold italic text-black">
                Acesse uma variedade de cursos ministrados por especialistas.
              </p>
            </article>

            {/* Card 2 */}
            <article className="flex h-48 flex-col justify-center rounded-lg bg-purple-500/60 p-6 shadow-lg shadow-black">
              <h2 className="mb-4 text-2xl font-bold text-purple-950">
                Planos Personalizados
              </h2>
              <p className="text-left font-semibold italic text-black">
                Escolha o plano que melhor se adapta às suas necessidades.
              </p>
            </article>

            {/* Card 3 */}
            <article className="flex h-48 flex-col justify-center rounded-lg bg-blue-500/60 p-6 shadow-lg shadow-black">
              <h2 className="mb-4 text-2xl font-bold text-blue-950">
                Suporte 24/7
              </h2>
              <p className="text-left font-semibold italic text-black">
                Nossa equipe está sempre disponível para ajudar.
              </p>
            </article>

            {/* Card 4 */}
            <article className="flex h-48 flex-col justify-center rounded-lg bg-yellow-500/60 p-6 shadow-lg shadow-black">
              <h2 className="mb-4 text-2xl font-bold text-yellow-950">
                Certificados
              </h2>
              <p className="text-left font-semibold italic text-black">
                Receba certificados reconhecidos ao concluir seus cursos.
              </p>
            </article>

            {/* Card 5 */}
            <article className="flex h-48 flex-col justify-center rounded-lg bg-green-500/60 p-6 shadow-lg shadow-black">
              <h2 className="mb-4 text-2xl font-bold text-green-950">
                Comunidade
              </h2>
              <p className="text-left font-semibold italic text-black">
                Conecte-se com outros alunos e compartilhe conhecimento.
              </p>
            </article>

            {/* Card 6 */}
            <article className="flex h-48 flex-col justify-center rounded-lg bg-red-500/60 p-6 shadow-lg shadow-black">
              <h2 className="mb-4 text-2xl font-bold text-red-950">
                Recursos Grátis
              </h2>
              <p className="text-left font-semibold italic text-black">
                Acesse materiais gratuitos para começar seu aprendizado.
              </p>
            </article>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
