"use client";

import Link from "next/link";
import { FaBook, FaDollarSign, FaHome } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

import { RiCommunityFill } from "react-icons/ri";

export default function Header() {
  interface Routes {
    [key: string]: string;
  }

  const getRoute = (item: string): string => {
    const routes: Routes = {
      Início: "/",
      Dashboard: "home",
      Cursos: "course",
      Planos: "plans",
      Comunidade: "community",
    };
    return routes[item] || item.toLowerCase();
  };
  // ----- //

  return (
    <header className="fixed top-0 z-20 w-full bg-black shadow-sm shadow-teal-500">
      <div className="mx-auto flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-20">
        {/* Título */}
        <h1 className="text-3xl font-bold text-white">MeuLogoTipo</h1>

        {/* Navegação */}
        <nav className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-6">
            {["Início", "Dashboard", "Cursos", "Planos", "Comunidade"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={`/${getRoute(item)}`}
                    className="group relative flex items-center gap-2 text-lg font-medium text-white hover:italic hover:text-pink-500"
                  >
                    {item === "Início" && <FaHome />}
                    {item === "Dashboard" && <MdSpaceDashboard />}
                    {item === "Cursos" && <FaBook />}
                    {item === "Planos" && <FaDollarSign />}
                    {item === "Comunidade" && <RiCommunityFill />}
                    {item}
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
