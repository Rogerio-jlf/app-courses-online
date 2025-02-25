"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [dynamicClass, setDynamicClass] = useState("");

  useEffect(() => {
    // Gere a classe dinâmica apenas no cliente
    setDynamicClass("__variable_2dbf9b __variable_3292b7 antialiased");
  }, []);

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
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            quality={100}
            className="h-full w-full object-cover opacity-80"
          />
        </div>

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
