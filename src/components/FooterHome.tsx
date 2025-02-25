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
import { useEffect, useState } from "react";

export default function Footer() {
  const [dynamicClass, setDynamicClass] = useState("");

  useEffect(() => {
    // Gere a classe dinâmica apenas no cliente
    setDynamicClass("__variable_2dbf9b __variable_3292b7 antialiased");
  }, []);

  return (
    <footer className={`${dynamicClass} bg-black font-kodchasan text-gray-300`}>
      {/* SEÇÃO, NEWSLETTER */}
      <section className="flex justify-center px-4 py-12 sm:px-6 lg:px-8">
        {/* Container, newsletter */}
        <div className="mx-auto mt-60 flex max-w-6xl flex-col items-center justify-between gap-8 pb-2 md:flex-row">
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

            <div className="flex justify-center space-x-4 rounded-lg bg-neutral-900 p-4 shadow-lg md:justify-center">
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
