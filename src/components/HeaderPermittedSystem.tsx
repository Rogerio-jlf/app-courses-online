"use client";

import Link from "next/link";
import { FaBook, FaDollarSign, FaSignInAlt } from "react-icons/fa";
import { BsFillSkipStartFill } from "react-icons/bs";

export default function HeaderPermittedSystem() {
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
  // ----- //

  return (
    <header className="fixed top-0 z-20 w-full bg-black font-kodchasan shadow-sm shadow-teal-500">
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
                  {item === "Cursos" && <FaBook />}
                  {item === "Planos" && <FaDollarSign />}
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
            href="/"
            className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-2 text-lg font-semibold text-white transition-colors duration-200 hover:bg-green-900 active:scale-90"
          >
            <BsFillSkipStartFill />
            Início
          </Link>

          {/* Botão de Login */}
          <Link
            href="/home"
            className="flex items-center gap-2 rounded-lg bg-pink-600 px-6 py-2 text-lg font-semibold text-white transition-colors duration-200 hover:bg-pink-900 active:scale-90"
          >
            <FaSignInAlt />
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  );
}
