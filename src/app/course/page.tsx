"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaClock, FaPlayCircle } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import {
  BiSolidCategoryAlt,
  BiSignal3,
  BiSignal4,
  BiSignal5,
} from "react-icons/bi";
import { SiLevelsdotfyi } from "react-icons/si";
import Image from "next/image";
import Footer from "@/components/Footer";

const courses = [
  {
    id: 1,
    name: "Inglês para Devs",
    category: "Idiomas",
    level: "Iniciante",
    duration: "6 meses",
    image: "/courses/english-devs.webp",
    imageTeacher: "/image-teachers/teacher-1.jpg",
    teacher: "John Doe",
    qualification: "English Teacher",
    icon: <BiSignal3 />,
  },
  {
    id: 2,
    name: "Formação em Kotlin",
    category: "Programação",
    level: "Intermediário",
    duration: "4 meses",
    image: "/courses/kotlin.webp",
    imageTeacher: "/image-teachers/teacher-2.avif",
    teacher: "Jane Doe",
    qualification: "Software Engineer",
    icon: <BiSignal4 />,
  },
  {
    id: 3,
    name: "Formação em Swfit",
    category: "Programação",
    level: "Intermediário",
    duration: "8 meses",
    image: "/courses/swift.webp",
    imageTeacher: "/image-teachers/teacher-3.jpg",
    teacher: "Alice Doe",
    qualification: "Software Engineer",
    icon: <BiSignal4 />,
  },
  {
    id: 4,
    name: "Formação em PHP",
    category: "Programação",
    level: "Intermediário",
    duration: "10 meses",
    image: "/courses/php.webp",
    imageTeacher: "/image-teachers/teacher-4.jpg",
    teacher: "Bob Doe",
    qualification: "Software Engineer",
    icon: <BiSignal4 />,
  },
  {
    id: 5,
    name: "Formação: IA para Devs",
    category: "Dados",
    level: "Intermediário",
    duration: "3 meses",
    image: "/courses/ia-devs.webp",
    imageTeacher: "/image-teachers/teacher-5.jpg",
    teacher: "Charlie Doe",
    qualification: "Data Scientist",
    icon: <BiSignal4 />,
  },
  {
    id: 6,
    name: "Formação em Go",
    category: "Programação",
    level: "Intermediário",
    duration: "5 meses",
    image: "/courses/go.webp",
    imageTeacher: "/image-teachers/teacher-6.jpg",
    teacher: "David Doe",
    qualification: "Software Engineer",
    icon: <BiSignal4 />,
  },
  {
    id: 7,
    name: "Formação Full-Stack",
    category: "Programação",
    level: "Iniciante",
    duration: "6 meses",
    image: "/courses/full-stack.svg",
    imageTeacher: "/image-teachers/teacher-7.jpg",
    teacher: "Alex Doe",
    qualification: "Full-Stack Developer",
    icon: <BiSignal3 />,
  },
  {
    id: 8,
    name: "Formação em DevOps",
    category: "Programação",
    level: "Intermediário",
    duration: "2 meses",
    image: "/courses/devops.svg",
    imageTeacher: "/image-teachers/teacher-8.jpg",
    teacher: "Kevin Doe",
    qualification: "DevOps Engineer",
    icon: <BiSignal4 />,
  },
  {
    id: 9,
    name: "Formação em React",
    category: "Programação",
    level: "Intermediário",
    duration: "4 meses",
    image: "/courses/react.svg",
    imageTeacher: "/image-teachers/teacher-9.jpg",
    teacher: "Alisson Doe",
    qualification: "Front-End Developer",
    icon: <BiSignal4 />,
  },
  {
    id: 10,
    name: "Formação em Java",
    category: "Programação",
    level: "Avançado",
    duration: "4 meses",
    image: "/courses/java.svg",
    imageTeacher: "/image-teachers/teacher-10.jpg",
    teacher: "Brad Doe",
    qualification: "Software Engineer",
    icon: <BiSignal5 />,
  },
  {
    id: 11,
    name: "Formação em Node.JS",
    category: "Programação",
    level: "Intermediário",
    duration: "4 meses",
    image: "/courses/node-js.svg",
    imageTeacher: "/image-teachers/teacher-11.jpg",
    teacher: "Charlie Doe",
    qualification: "Software Engineer",
    icon: <BiSignal4 />,
  },
  {
    id: 12,
    name: "Formação em IA",
    category: "Dados",
    level: "Intermediário",
    duration: "4 meses",
    image: "/courses/ia.svg",
    imageTeacher: "/image-teachers/teacher-12.jpg",
    teacher: "Anny Doe",
    qualification: "Data Scientist",
    icon: <BiSignal4 />,
  },
  {
    id: 13,
    name: "Formação em Python",
    category: "Programação",
    level: "Intermediário",
    duration: "4 meses",
    image: "/courses/python.svg",
    imageTeacher: "/image-teachers/teacher-13.avif",
    teacher: "Victory Doe",
    qualification: "Software Engineer",
    icon: <BiSignal4 />,
  },
  {
    id: 14,
    name: "Formação em C#",
    category: "Programação",
    level: "Intermediário",
    duration: "4 meses",
    image: "/courses/c-sharp.svg",
    imageTeacher: "/image-teachers/teacher-14.avif",
    teacher: "Steve Doe",
    qualification: "Software Engineer",
    icon: <BiSignal4 />,
  },
  {
    id: 15,
    name: "Formação em R. Native",
    category: "Programação",
    level: "Avançado",
    duration: "4 meses",
    image: "/courses/react-native.svg",
    imageTeacher: "/image-teachers/teacher-15.avif",
    teacher: "Wesley Doe",
    qualification: "Software Engineer",
    icon: <BiSignal5 />,
  },
];

const articles = [
  {
    id: 1,
    title: "Como aprender React",
    excerpt:
      "React é uma biblioteca JavaScript para construir interfaces de usuário...",
  },
  {
    id: 2,
    title: "Introdução ao Next.js",
    excerpt:
      "Next.js é um framework React com renderização do lado do servidor...",
  },
  {
    id: 3,
    title: "Dicas de JavaScript",
    excerpt: "JavaScript é uma linguagem de programação versátil e poderosa...",
  },
  {
    id: 4,
    title: "Intrução ao Node.js",
    excerpt:
      "Node.js é uma plataforma para desenvolvimento de aplicações backend...",
  },
  {
    id: 5,
    title: "Dicas Full-Stack",
    excerpt: "Full-Stack é um termo usado para descrever desenvolvedores...",
  },
];

const testimonials = [
  {
    id: 1,
    student: "Carla Silva",
    image: "/students/student-1.avif",
    message:
      "Este curso mudou minha vida! Aprendi muito e consegui um ótimo emprego.",
  },
  {
    id: 2,
    student: "Ana Pereira",
    image: "/students/student-2.avif",

    message:
      "Os professores são excelentes e o conteúdo é muito bem estruturado.",
  },
  {
    id: 3,
    student: "João Souza",
    image: "/students/student-3.avif",
    message:
      "Recomendo a todos que querem se especializar na área de tecnologia.",
  },
  {
    id: 4,
    student: "Luana Ferreira",
    image: "/students/student-4.avif",
    message:
      "A plataforma é muito fácil de usar e os cursos são excelentes. Recomendo!",
  },
  {
    id: 5,
    student: "Marcos Vilela",
    image: "/students/student-5.avif",

    message: "Minha experiência com a plataforma foi incrível. Aprendi muito.",
  },
  {
    id: 6,
    student: "Pedro Marra",
    image: "/students/student-6.avif",
    message: "Eles possuem uma equipe de suporte muito atenciosa e prestativa.",
  },
];

const partnerships = [
  {
    id: 1,
    name: "Ambev",
    logo: "/partners/ambev.jpg",
  },
  {
    id: 2,
    name: "C6 Bank",
    logo: "/partners/c6-bank.png",
  },
  {
    id: 3,
    name: "Fiat",
    logo: "/partners/fiat.png",
  },
  {
    id: 4,
    name: "Mercado Livre",
    logo: "/partners/mercado-livre.jpg",
  },
  {
    id: 5,
    name: "Nestlé",
    logo: "/partners/nestle.jpg",
  },
  {
    id: 6,
    name: "nubank",
    logo: "/partners/nubank.png",
  },
  {
    id: 7,
    name: "Pepsi",
    logo: "/partners/pepsi.png",
  },
  {
    id: 8,
    name: "Pepsico",
    logo: "/partners/pepsico.jpg",
  },
  {
    id: 9,
    name: "Unilever",
    logo: "/partners/unilever.png",
  },
  {
    id: 10,
    name: "Uol",
    logo: "/partners/uol.png",
  },
  {
    id: 11,
    name: "Vivo",
    logo: "/partners/vivo.jpg",
  },
  {
    id: 12,
    name: "XP Investimentos",
    logo: "/partners/xp-investimentos.png",
  },
];

const coursePreviews = [
  {
    id: 1,
    title: "Introdução à Programação",
    videoUrl: "https://www.youtube.com/embed/gMxQ8vxH9Vk",
    duration: "15 min",
    level: "Iniciante",
    iconDuration: <FaPlayCircle />,
    iconLevel: <BiSignal3 />,
  },
  {
    id: 2,
    title: "Node.JS para Iniciantes",
    videoUrl: "https://www.youtube.com/embed/hHM-hr9q4mo",
    duration: "20 min",
    level: "Intermediário",
    iconDuration: <FaPlayCircle />,
    iconLevel: <BiSignal4 />,
  },
  {
    id: 3,
    title: "React Native: Construindo Apps",
    videoUrl: "https://www.youtube.com/embed/mqltv3kFdgE",
    duration: "25 min",
    level: "Avançado",
    iconDuration: <FaPlayCircle />,
    iconLevel: <BiSignal5 />,
  },
  {
    id: 4,
    title: "Python: Introdução à Linguagem",
    videoUrl: "https://www.youtube.com/embed/3oKT5Oz1bTU",
    duration: "18 min",
    level: "Iniciante",
    iconDuration: <FaPlayCircle />,
    iconLevel: <BiSignal3 />,
  },
];

export default function CoursePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [dynamicClass, setDynamicClass] = useState("");

  useEffect(() => {
    // Gere a classe dinâmica apenas no cliente
    setDynamicClass("__variable_2dbf9b __variable_3292b7 antialiased");
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(search.toLowerCase()) &&
      (category && category !== "all" ? course.category === category : true) &&
      (level && level !== "all" ? course.level === level : true),
  );

  return (
    <main
      className={`${dynamicClass} bg-neutral-950/95 font-kodchasan text-gray-300`}
    >
      {/* SEÇÃO, HEADER / FILTROS - OK */}
      <section className="mt-24 px-4 py-12 sm:px-6 lg:px-8">
        {/* Container geral da seção  */}
        <div className="mx-auto max-w-6xl">
          <header className="text-center">
            <h1 className="mb-6 bg-gradient-to-r from-pink-700 to-purple-500 bg-clip-text text-left text-5xl leading-tight text-transparent">
              Comece ou especialize-se em programação e conquiste as melhores
              vagas do mercado
            </h1>

            <p className="mb-8 max-w-4xl bg-gradient-to-r from-yellow-700 to-green-500 bg-clip-text text-left text-3xl text-transparent">
              A plataforma completa pra você aprender programação do zero no seu
              ritmo, se tornar Full Stack e se especializar em diversas
              tecnologias.
            </p>

            <p className="mb-10 max-w-3xl text-left text-xl font-semibold italic text-gray-300">
              Escolha o curso ideal, que combine com o seu perfil e a sua
              necessidade, para alavancar a sua carreira.
            </p>
          </header>

          {/* Container, filtros */}
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            {/* Input, buscar curso */}
            <div className="relative w-full md:w-1/3">
              <Input
                className="w-full rounded-lg border-[1px] border-gray-700 bg-gray-950 p-2 pl-10 font-semibold italic text-white placeholder-gray-500"
                placeholder="Buscar curso..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ImSearch className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
            </div>

            {/* Select, categoria */}
            <div className="relative w-full md:w-1/3">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full rounded-lg border-[1px] border-gray-700 bg-gray-950 pl-10 text-sm font-semibold italic text-gray-500">
                  <SelectValue placeholder="Todas as Categorias" />
                </SelectTrigger>
                <SelectContent className="border-[1px] border-gray-700 bg-gray-950/60 text-white">
                  <SelectItem value="all" className="text-gray-500">
                    Todas as Categorias
                  </SelectItem>
                  <SelectItem value="Programação">Programação</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Dados">Dados</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Finanças">Finanças</SelectItem>
                </SelectContent>
              </Select>
              <BiSolidCategoryAlt className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
            </div>

            {/* Select, nível */}
            <div className="relative w-full md:w-1/3">
              <Select value={level} onValueChange={setLevel}>
                <SelectTrigger className="w-full rounded-lg border-[1px] border-gray-700 bg-gray-950 pl-10 text-sm font-semibold italic text-gray-500">
                  <SelectValue placeholder="Todos os Níveis" />
                </SelectTrigger>
                <SelectContent className="border-[1px] border-gray-700 bg-gray-950/60 text-white">
                  <SelectItem value="all" className="text-gray-500">
                    Todos os Níveis
                  </SelectItem>
                  <SelectItem value="Iniciante">Iniciante</SelectItem>
                  <SelectItem value="Intermediário">Intermediário</SelectItem>
                  <SelectItem value="Avançado">Avançado</SelectItem>
                </SelectContent>
              </Select>
              <SiLevelsdotfyi className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
            </div>
          </div>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO, CARDS DOS CURSOS - OK */}
      <section className="mb-4 px-4 py-12 sm:px-6 lg:px-8">
        {/* Container geral */}
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id}>
                {/* Container dos cards */}
                <div className="overflow-hidden rounded-xl border-[1px] border-gray-700 bg-gray-950 text-gray-300">
                  {/* Imagem do curso */}
                  <div className="relative text-center">
                    {course.image && (
                      <Image
                        src={course.image}
                        alt={course.name}
                        width={128}
                        height={128}
                        className="mx-auto w-full rounded-t-lg"
                      />
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-30 transition-all duration-300 hover:bg-opacity-0" />
                  </div>

                  {/* Informações do curso */}
                  <div className="mb-4 mt-4 px-6">
                    <h2 className="mb-2 text-2xl font-bold text-white">
                      {course.name}
                    </h2>
                    <p className="mb-2 text-sm font-semibold italic text-gray-400">
                      {course.category}
                    </p>
                    <p className="mb-2 flex items-center gap-2 text-sm text-yellow-400">
                      <span className="text-4xl text-yellow-500">
                        {course.icon}
                      </span>{" "}
                      {course.level}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-green-500">
                      <FaClock /> Duração: {course.duration}
                    </p>
                  </div>

                  {/* Informações do professor */}
                  <div className="mb-10 flex h-full items-center gap-4 px-6">
                    {/* Imagem */}
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center">
                      {course.imageTeacher && (
                        <Image
                          src={course.imageTeacher}
                          alt={course.name}
                          width={76}
                          height={76}
                          className="rounded-full object-cover transition-all duration-300 hover:scale-125"
                        />
                      )}
                    </div>

                    {/* Nome e qualificação */}
                    <div className="flex flex-col justify-center">
                      <p className="text-md font-semibold text-white">
                        {course.teacher}
                      </p>
                      <p className="text-xs font-semibold italic text-gray-400">
                        {course.qualification}
                      </p>
                    </div>
                  </div>

                  {/* Botão, saiba mais */}
                  <div className="px-6 pb-6">
                    <button className="w-full rounded-lg bg-gradient-to-r from-purple-700 to-blue-500 py-2 hover:from-purple-950 hover:to-blue-950 active:scale-90">
                      Saiba Mais
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-300">
              Nenhum curso encontrado
            </p>
          )}
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO, PARCERIAS - OK */}
      <section className="bg-gray-950 px-4 py-12 sm:px-6 lg:px-8">
        {/* Container geral da seção */}
        <div className="text-center">
          {/* Títulos */}
          <h2 className="m-auto mb-4 max-w-6xl bg-gradient-to-r from-yellow-400 via-green-400 to-teal-300 bg-clip-text text-left text-5xl text-transparent">
            Empresas que confiam em nossa formação e qualidade de ensino
          </h2>

          <p className="m-auto mb-14 mt-4 max-w-6xl text-left text-xl font-semibold italic text-gray-300">
            Conheça as empresas que são nossas parceiras e confiam em nossa
            formação. Junte-se a nós e faça parte deste time de sucesso.
          </p>

          {/* Container, carrosséis */}
          <div className="">
            {/* Carrossel 1 - Direção Normal */}
            <div className="">
              <div className="flex w-max animate-marquee space-x-14">
                {[...partnerships, ...partnerships].map((partner, index) => (
                  <div
                    key={`top-${partner.id}-${index}`}
                    className="flex-shrink-0 p-4 transition-transform duration-300 hover:scale-110"
                  >
                    <div className="relative rounded-2xl p-2 shadow-md transition-all duration-200 hover:shadow-yellow-400">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={120}
                        height={120}
                        className="rounded-xl opacity-80 shadow-md transition duration-300 hover:opacity-100 hover:shadow-teal-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carrossel 2 - Direção Reversa */}
            <div className="">
              <div className="animate-marquee-reverse flex w-max space-x-14">
                {[...partnerships, ...partnerships].map((partner, index) => (
                  <div
                    key={`bottom-${partner.id}-${index}`}
                    className="flex-shrink-0 p-4 transition-transform duration-300 hover:scale-110"
                  >
                    <div className="relative rounded-2xl p-2 shadow-md transition-all duration-200 hover:shadow-yellow-400">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={120}
                        height={120}
                        className="rounded-xl opacity-80 shadow-md transition duration-300 hover:opacity-100 hover:shadow-teal-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- */}

      {/* ESTILOS CSS DOS CARROSSÉIS - OK */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
      {/* ---------- */}

      {/* SEÇÃO, PRÉVIA DAS AULAS - OK */}
      <section className="my-4 px-4 py-12 sm:px-6 lg:px-8">
        {/* Container geral da seção */}
        <div className="mx-auto max-w-6xl text-center">
          {/* Títulos */}
          <h2 className="mb-6 bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-left text-5xl text-transparent">
            Prévia das Aulas
          </h2>

          <p className="mb-10 text-left text-xl font-semibold italic text-gray-300">
            Conheça um pouco do conteúdo dos nossos cursos e formações. Assista
            a uma prévia gratuita e veja como é fácil aprender com a nossa
            plataforma.
          </p>

          {/* Container das prévias */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {coursePreviews.map((preview) => (
              <div
                key={preview.id}
                className="relative overflow-hidden rounded-lg border-[1px] border-gray-700 bg-white/90 transition-all duration-200 hover:scale-105"
              >
                {/* Vídeo */}
                <div className="aspect-w-16 aspect-h-9 relative">
                  <iframe
                    width="100%"
                    height="200"
                    src={preview.videoUrl}
                    title={preview.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-t-lg"
                  />
                </div>

                {/* Título da Aula */}
                <div className="p-4">
                  <p className="mb-4 text-lg font-extrabold text-purple-700">
                    {preview.title}
                  </p>
                  <p className="mb-4 text-sm font-semibold italic text-black">
                    Assista a uma prévia gratuita deste curso.
                  </p>

                  {/* Informações Adicionais */}
                  <div className="flex items-center justify-between text-xs text-purple-700">
                    <div className="flex items-center gap-2">
                      <p className="flex items-center gap-2 text-sm font-semibold italic">
                        <span className="text-lg text-purple-700">
                          {preview.iconDuration}
                        </span>{" "}
                        {preview.duration}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <p className="flex items-center gap-2 text-sm font-semibold italic">
                        <span className="text-lg text-purple-700">
                          {preview.iconLevel}
                        </span>{" "}
                        {preview.level}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Badge de Destaque */}
                <div className="absolute right-4 top-4 rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white">
                  Grátis
                </div>

                {/* Botão de Ação */}
                <div className="p-4">
                  <button className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 py-2 text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700">
                    Assistir Prévia
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO, PARA QUEM É? - OK */}
      <section className="bg-gray-950 px-4 py-12 sm:px-6 lg:px-8">
        {/* Container geral da seção */}
        <div className="m-auto mb-4 mt-4 max-w-6xl rounded-lg border border-gray-700 bg-black/60 p-8">
          <h2 className="mb-4 bg-gradient-to-r from-slate-700 via-purple-600 to-teal-500 bg-clip-text text-center text-5xl text-transparent">
            Para quem é a plataforma?
          </h2>

          <p className="mb-20 text-center text-3xl italic text-gray-300">
            Independente do seu nível, a plataforma é para você
          </p>

          {/* Container, cards e imagem */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Cards à Esquerda */}
            <div className="mb-14 grid grid-rows-3 gap-6">
              {/* Card 1 */}
              <div className="flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-gray-300">Iniciante</h3>
                <p className="italic text-gray-400">
                  Comece do zero com cursos introdutórios e tutoriais passo a
                  passo. Aprenda os conceitos básicos e construa uma base
                  sólida.
                </p>
                <hr className="border-t-2 border-gray-700" />
              </div>

              {/* Card 2 */}
              <div className="flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-gray-300">
                  Intermediário
                </h3>
                <p className="italic text-gray-400">
                  Aprimore suas habilidades com cursos avançados e projetos
                  práticos. Aprofunde-se em tópicos específicos.
                </p>
                <hr className="border-t-2 border-gray-700" />
              </div>

              {/* Card 3 */}
              <div className="flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-gray-300">Avançado</h3>
                <p className="italic text-gray-400">
                  Domine os tópicos mais complexos com cursos especializados e
                  mentorias. Torne-se um expert e destaque-se no mercado.
                </p>
                <hr className="border-t-2 border-transparent" />
              </div>
            </div>

            {/* Imagem à Direita */}
            <div className="mb-14 flex items-center justify-center">
              <Image
                src="/pessoas-programadoras.webp"
                alt="Plataforma para todos"
                width={1200}
                height={1200}
                className="h-full w-full rounded-lg object-cover shadow-md shadow-red-500"
              />
            </div>
          </div>

          {/* Container, linha horizontal */}
          <div className="mx-auto max-w-6xl">
            <div className="relative my-12 flex items-center justify-center gap-6">
              {/* Linha à esquerda */}
              <hr className="flex-1 border-t-2 border-gray-700" />

              {/* Texto no meio */}
              <span className="rounded-lg bg-gray-800 px-4 py-2 text-lg font-semibold text-gray-300">
                Também é para quem...
              </span>

              {/* Linha à direita */}
              <hr className="flex-1 border-t-2 border-gray-700" />
            </div>
          </div>

          {/* Container, também é para quem */}
          <div className="text-center">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <div className="rounded-lg border border-gray-700 bg-gray-900 p-6 transition-all duration-300 hover:border-yellow-700">
                <h3 className="mb-4 text-xl font-bold text-gray-300">
                  Quer mudar de carreira
                </h3>
                <p className="text-left text-sm text-gray-400">
                  Quer mudar de carreira. Oferecemos cursos que ajudam você a
                  fazer a transição para uma nova área.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-lg border border-gray-700 bg-gray-900 p-6 transition-all duration-300 hover:border-blue-700">
                <h3 className="mb-4 text-xl font-bold text-gray-300">
                  Busca atualização tecnológica
                </h3>
                <p className="text-left text-sm text-gray-400">
                  Mantenha-se atualizado com as últimas tendências e tecnologias
                  do mercado.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-lg border border-gray-700 bg-gray-900 p-6 transition-all duration-300 hover:border-green-700">
                <h3 className="mb-4 text-xl font-bold text-gray-300">
                  Prefere aprender no seu ritmo
                </h3>
                <p className="text-left text-sm text-gray-400">
                  Cursos flexíveis que se adaptam ao seu tempo e estilo de
                  aprendizado.
                </p>
              </div>

              {/* Card 4 */}
              <div className="rounded-lg border border-gray-700 bg-gray-900 p-6 transition-all duration-300 hover:border-pink-700">
                <h3 className="mb-4 text-xl font-bold text-gray-300">
                  Quer fazer networking
                </h3>
                <p className="text-left text-sm text-gray-400">
                  Conecte-se com outros alunos e profissionais da área.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO, DEPOIMENTOS DOS ALUNOS - OK */}
      <section className="mb-14 px-4 py-12 sm:px-6 lg:px-8">
        {/* Container geral da seção */}
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-left text-5xl text-transparent">
            Eles conquistaram seus objetivos de carreira e transformaram suas
            vidas
          </h2>

          <p className="mb-14 max-w-3xl text-left text-xl font-semibold italic text-gray-300">
            Veja o que os nossos alunos têm a dizer sobre a experiência de
            aprendizado na plataforma
          </p>

          {/* Container, cards de depoimentos */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="overflow-hidden rounded-lg border-[1px] border-gray-800 bg-gradient-to-r from-pink-700 to-slate-950 p-6 text-gray-300 shadow-sm shadow-white"
              >
                {/* Mensagem do aluno */}
                <p className="italic">&quot;{testimonial.message}&quot;</p>

                {/* Informações do aluno */}
                <div className="flex h-full items-center gap-4 pb-6">
                  {/* Imagem */}
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center">
                    {testimonial.id && (
                      <Image
                        src={testimonial.image}
                        alt="Aluno"
                        width={76}
                        height={76}
                        className="rounded-full object-cover transition-all duration-200 hover:scale-125"
                      />
                    )}
                  </div>

                  {/* Nome */}
                  <div className="flex flex-col justify-center">
                    <p className="text-md font-semibold italic">
                      {testimonial.student}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO, OFERTA ESPECIAL - OK */}
      <section className="bg-gradient-to-b from-green-600 to-indigo-700 px-4 py-12 text-center text-gray-300 sm:px-6 lg:px-8">
        <div className="mb-8 mt-8">
          <h2 className="mb-10 text-5xl text-black">Oferta Especial!</h2>
          <p className="mb-14 text-xl font-semibold italic text-black">
            Inscreva-se agora e ganhe 20% de desconto em qualquer plano de
            assinatura.
          </p>
          <button className="rounded-lg bg-black px-6 py-4 font-semibold italic transition-all duration-300 hover:bg-gray-300 hover:text-black">
            Inscreva-se Agora
          </button>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO, ÚLTIMOS ARTIGOS - OK */}
      <section className="mb-4 mt-6 px-4 py-12 sm:px-6 lg:px-8">
        {/* Container geral da seção */}
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 bg-gradient-to-r from-purple-700 to-teal-500 bg-clip-text text-left text-5xl leading-tight text-transparent">
            Últimos Artigos
          </h2>

          <p className="mb-14 text-left text-xl font-semibold italic text-gray-300">
            Leia nossos últimos artigos e fique por dentro das novidades do
            mundo da tecnologia
          </p>

          {/* Container dos cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Primeira Linha: 3 Cards */}
            {articles.slice(0, 3).map((article) => (
              <div
                key={article.id}
                className="overflow-hidden rounded-lg border-[1px] border-gray-800 bg-black p-6 hover:border-gray-500"
              >
                <h3 className="mb-2 text-2xl font-bold text-gray-300">
                  {article.title}
                </h3>
                <p className="mb-4 text-sm text-gray-400">{article.excerpt}</p>
                <button className="text-purple-500 hover:italic hover:underline">
                  Leia Mais
                </button>
              </div>
            ))}

            {/* Segunda Linha: 2 Cards Centralizados */}
            <div className="col-span-1 flex justify-center gap-6 md:col-span-3">
              {articles.slice(3, 5).map((article) => (
                <div
                  key={article.id}
                  className="w-full overflow-hidden rounded-lg border-[1px] border-gray-800 bg-black p-6 hover:border-gray-500 md:w-1/2 lg:w-1/3"
                >
                  <h3 className="mb-2 text-2xl font-bold text-gray-300">
                    {article.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-400">
                    {article.excerpt}
                  </p>
                  <button className="text-purple-500 hover:italic hover:underline">
                    Leia Mais
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO, CURSOS GRÁTIS */}
      <section className="bg-gray-950 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          {/* Título da Seção */}
          <h2 className="mb-4 bg-gradient-to-r from-green-700 to-yellow-500 bg-clip-text text-5xl text-transparent">
            Cursos Grátis
          </h2>
          <p className="mb-14 text-xl font-semibold italic text-gray-300">
            Aproveite nossos cursos gratuitos para aprender novas habilidades
            sem gastar nada!
          </p>

          {/* Grid de Cursos Grátis */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-lg border-[1px] border-gray-800 bg-gray-900 p-6 hover:border-purple-600">
              <div className="text-center">
                {/* Badge Grátis */}
                <div className="text-md mb-4 inline-flex items-center justify-center rounded-full bg-green-600 px-3 py-1 font-bold italic text-black">
                  Grátis
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-200">
                  Introdução ao JavaScript
                </h3>

                <p className="text-md mb-4 text-left text-gray-300">
                  Aprenda os conceitos básicos do JavaScript e comece a criar
                  interatividade em suas páginas web.
                </p>

                <p className="mb-10 text-left text-sm text-gray-400">
                  Categoria: Programação
                </p>

                <button className="w-full rounded-lg bg-purple-700 py-2 italic text-white hover:bg-purple-950 active:scale-90">
                  Acessar Curso
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 hover:border-blue-600">
              <div className="text-center">
                <div className="text-md mb-4 inline-flex items-center justify-center rounded-full bg-green-600 px-3 py-1 font-bold italic text-black">
                  Grátis
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-200">
                  Design com Figma
                </h3>

                <p className="text-md mb-4 text-left text-gray-300">
                  Domine o Figma e crie interfaces de usuário incríveis para
                  seus projetos web.
                </p>

                <p className="mb-10 text-left text-sm text-gray-400">
                  Categoria: Design
                </p>

                <button className="w-full rounded-lg bg-blue-700 py-2 text-white hover:bg-blue-950 active:scale-90">
                  Acessar Curso
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 hover:border-teal-500">
              <div className="text-center">
                <div className="text-md mb-4 inline-flex items-center justify-center rounded-full bg-green-600 px-3 py-1 font-bold italic text-black">
                  Grátis
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-200">
                  Introdução ao Python
                </h3>

                <p className="text-md mb-4 text-left text-gray-300">
                  Comece a programar em Python, uma das linguagens mais
                  populares e versáteis do mundo.
                </p>

                <p className="mb-10 text-left text-sm text-gray-400">
                  Categoria: Programação
                </p>

                <button className="w-full rounded-lg bg-teal-700 py-2 text-white hover:bg-teal-950 active:scale-90">
                  Acessar Curso
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- */}

      <Footer />
    </main>
  );
}
