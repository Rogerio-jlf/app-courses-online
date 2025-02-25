"use client";

import React from "react";
import Link from "next/link";
import { VscCalendar, VscChevronRight, VscBellDot } from "react-icons/vsc";
import {
  FaChartPie,
  FaChartBar,
  FaBook,
  FaRocket,
  FaClock,
  FaRegBookmark,
  FaCertificate,
} from "react-icons/fa";
import FooterHome from "@/components/FooterHome";

export default function DashboardPage() {
  const user = {
    name: "João Silva",
    progress: {
      totalCourses: 4,
      completedCourses: 2,
      inProgressCourses: 2,
    },
    enrolledCourses: [
      {
        id: 1,
        title: "Desenvolvimento Web",
        progress: 60,
        nextLesson: "JavaScript Básico",
        timeEstimate: "45min",
        link: "/curso/desenvolvimento-web",
      },
      {
        id: 2,
        title: "Data Science",
        progress: 30,
        nextLesson: "Introdução ao Python",
        timeEstimate: "30min",
        link: "/curso/data-science",
      },
    ],
    recommendedCourses: [
      {
        id: 3,
        title: "UX/UI Design",
        description: "Aprenda os fundamentos de design de interfaces",
        duration: "40h",
        level: "Iniciante",
        link: "/curso/ux-ui-design",
      },
      {
        id: 4,
        title: "Marketing Digital",
        description: "Estratégias modernas de marketing online",
        duration: "35h",
        level: "Intermediário",
        link: "/curso/marketing-digital",
      },
    ],
    recentActivities: [
      {
        id: 1,
        description: "Concluiu a aula 'Introdução ao HTML'",
        date: "2023-10-01",
        points: 100,
      },
      {
        id: 2,
        description: "Iniciou o curso 'Data Science'",
        date: "2023-09-28",
        points: 50,
      },
    ],
    achievements: [
      {
        id: 1,
        title: "Primeira Certificação",
        description: "Completou seu primeiro curso",
        icon: "🏆",
      },
      {
        id: 2,
        title: "Dedicação",
        description: "Estudou por 7 dias seguidos",
        icon: "⭐",
      },
    ],
    nextEvents: [
      {
        id: 1,
        title: "Workshop de React",
        date: "2023-10-15",
        time: "19:00",
      },
      {
        id: 2,
        title: "Mentoria em Grupo",
        date: "2023-10-18",
        time: "20:00",
      },
    ],

    completedCourses: [
      {
        id: 1,
        title: "HTML & CSS Fundamentals",
        completionDate: "2023-09-15",
        grade: "98%",
        certificateLink: "/certificados/html-css",
        instructor: "Maria Santos",
        duration: "20h",
      },
      {
        id: 2,
        title: "Git & GitHub",
        completionDate: "2023-08-30",
        grade: "95%",
        certificateLink: "/certificados/git-github",
        instructor: "Pedro Alves",
        duration: "15h",
      },
    ],
  };

  const cardGradients = {
    purple:
      "from-purple-500/20 to-purple-900/20 hover:from-purple-500/30 hover:to-purple-900/30",
    blue: "from-blue-500/20 to-blue-900/20 hover:from-blue-500/30 hover:to-blue-900/30",
    green:
      "from-green-500/20 to-green-900/20 hover:from-green-500/30 hover:to-green-900/30",
    pink: "from-pink-500/20 to-pink-900/20 hover:from-pink-500/30 hover:to-pink-900/30",
    orange:
      "from-orange-500/20 to-orange-900/20 hover:from-orange-500/30 hover:to-orange-900/30",
    teal: "from-teal-500/20 to-teal-900/20 hover:from-teal-500/30 hover:to-teal-900/30",
    yellow:
      "from-yellow-500/20 to-yellow-900/20 hover:from-yellow-500/30 hover:to-yellow-900/30",
    red: "from-red-500/20 to-red-900/20 hover:from-red-500/30 hover:to-red-900/30",
  };

  interface CardInfoProps {
    title: string;
    value: string | number;
    icon: React.ComponentType<{ className?: string }>;
    color: keyof typeof cardGradients;
  }
  const CardInfo = ({ title, value, icon: Icon, color }: CardInfoProps) => (
    <div
      className={`group rounded-xl bg-gradient-to-br ${cardGradients[color]} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105`}
    >
      <div className="flex items-center space-x-4">
        <div className={`rounded-lg bg-${color}-400/30 p-3`}>
          <Icon className={`text-3xl text-${color}-400`} />
        </div>
        <div>
          <p className={`text-sm text-${color}-200`}>{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-neutral-950/95 text-white">
      {/* SEÇÃO - HEADER */}
      <section className="mt-24 px-4 py-12 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <header className="text-center">
            <h1 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-left text-6xl leading-tight text-transparent">
              Dashboard
            </h1>

            <p className="text-left text-2xl font-semibold italic text-white">
              Acompanhe seu progresso, continue aprendendo e descubra novos
              cursos recomendados.
            </p>
          </header>
        </div>
      </section>
      {/* ---------- */}

      {/* Container geral da página */}
      <div className="container mx-auto px-6 pb-6">
        {/* SEÇÃO - SEJA BEM-VINDO */}
        <section className="mb-14">
          <div className="mb-4 flex flex-wrap items-center justify-between">
            <h1 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent">
              Bem-vindo, {user.name}!
            </h1>
            <div className="flex items-center space-x-2 text-2xl text-gray-300">
              <VscCalendar />
              <span>{new Date().toLocaleDateString("pt-BR")}</span>
              <button className="relative rounded-full p-2">
                <VscBellDot className="text-2xl text-blue-500" />
                <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <CardInfo
              title="Cursos Concluídos"
              value={user.progress.completedCourses}
              icon={FaChartPie}
              color="blue"
            />
            <CardInfo
              title="Em Andamento"
              value={user.progress.inProgressCourses}
              icon={FaChartBar}
              color="green"
            />
            <CardInfo
              title="Total de Cursos"
              value={user.progress.totalCourses}
              icon={FaBook}
              color="yellow"
            />
            <CardInfo
              title="Recomendados"
              value={user.recommendedCourses.length}
              icon={FaRocket}
              color="red"
            />
          </div>
        </section>
        {/* ---------- */}

        {/* SEÇÃO - CURSOS CONCLUÍDOS - OK */}
        <section className="mb-14">
          {/* Título */}
          <h2 className="mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-2xl font-bold text-transparent">
            Cursos Concluídos
          </h2>

          {/* Container dos cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {user.completedCourses.map((course, index) => (
              <div
                key={course.id}
                className={`rounded-xl bg-gradient-to-br ${
                  index % 2 === 0 ? cardGradients.teal : cardGradients.green
                } p-6 backdrop-blur-sm transition-all duration-300`}
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 text-xl font-bold">{course.title}</h3>
                    <p className="text-sm text-gray-300">
                      Instrutor: {course.instructor}
                    </p>
                  </div>
                  <FaCertificate className="text-2xl text-yellow-400" />
                </div>

                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-300">Nota Final</p>
                    <p className="text-lg font-bold text-green-400">
                      {course.grade}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Duração</p>
                    <p className="text-lg font-bold">{course.duration}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">
                    Concluído em:{" "}
                    {new Date(course.completionDate).toLocaleDateString(
                      "pt-BR",
                    )}
                  </span>
                  <Link
                    href={course.certificateLink}
                    className="flex items-center text-sm text-emerald-500 transition-colors duration-200 hover:text-pink-500"
                  >
                    Ver Certificado
                    <VscChevronRight className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* ---------- */}

        {/* Container geral */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* SEÇÃO - CONTINUE APRENDENDO - OK */}
            <section id="cursos" className="mb-14">
              <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
                Continue Aprendendo
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {user.enrolledCourses.map((course, index) => (
                  <Link href={course.link} key={course.id}>
                    <div
                      className={`group rounded-xl bg-gradient-to-br ${
                        index % 2 === 0
                          ? cardGradients.blue
                          : cardGradients.purple
                      } p-6 backdrop-blur-sm transition-all duration-300`}
                    >
                      <h3 className="mb-4 text-xl font-bold">{course.title}</h3>
                      <p className="mb-2 text-sm text-gray-300">
                        Próxima aula: {course.nextLesson}
                      </p>
                      <div className="mb-4 h-2.5 w-full overflow-hidden rounded-full bg-gray-700">
                        <div
                          className="h-2.5 rounded-full bg-gradient-to-r from-blue-700 to-purple-700 transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-300">
                          <FaClock className="mr-2" />
                          {course.timeEstimate}
                        </div>
                        <p className="flex items-center text-blue-500 transition-colors duration-200 group-hover:text-pink-500">
                          Continuar
                          <VscChevronRight className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
            {/* ---------- */}

            {/* SEÇÃO - CURSOS RECOMENDADOS - OK */}
            <section id="recomendados" className="mb-14">
              <h2 className="mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
                Cursos Recomendados
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {user.recommendedCourses.map((course, index) => (
                  <Link href={course.link} key={course.id}>
                    <div
                      className={`group rounded-xl bg-gradient-to-br ${
                        index % 2 === 0
                          ? cardGradients.pink
                          : cardGradients.purple
                      } p-6 backdrop-blur-sm transition-all duration-300`}
                    >
                      <h3 className="mb-4 text-xl font-bold">{course.title}</h3>
                      <p className="mb-8 text-sm text-gray-300">
                        {course.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-4">
                          <span className="text-sm text-gray-300">
                            <FaClock className="mr-1 inline" />
                            {course.duration}
                          </span>
                          <span className="text-sm text-gray-300">
                            <FaBook className="mr-1 inline" />
                            {course.level}
                          </span>
                        </div>
                        <FaRegBookmark className="text-blue-500 transition-colors duration-200 group-hover:text-pink-500" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
            {/* ---------- */}
          </div>
          {/* ---------- */}

          {/* Container geral da seção */}
          <div className="lg:col-span-1">
            {/* SEÇÃO - SUAS CONQUISTAS - OK */}
            <section id="conquistas" className="mb-14">
              <h2 className="mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-2xl font-bold text-transparent">
                Suas Conquistas
              </h2>
              <div className="space-y-4">
                {user.achievements.map((achievement, index) => (
                  <div
                    key={achievement.id}
                    className={`rounded-xl bg-gradient-to-br ${
                      index % 2 === 0
                        ? cardGradients.orange
                        : cardGradients.yellow
                    } p-4 backdrop-blur-sm`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div>
                        <h3 className="font-bold">{achievement.title}</h3>
                        <p className="text-sm text-gray-300">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* ---------- */}

            {/* SEÇÃO - PRÓXIMOS EVENTOS - OK */}
            <section id="eventos" className="">
              <h2 className="mb-4 text-2xl font-bold">Próximos Eventos</h2>
              <div className="space-y-4">
                {user.nextEvents.map((event) => (
                  <div
                    key={event.id}
                    className="rounded-xl bg-gray-800/50 p-4 backdrop-blur-sm"
                  >
                    <h3 className="font-bold">{event.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <VscCalendar />
                      <span>
                        {event.date} às {event.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* ---------- */}
          </div>
          {/* ---------- */}
        </div>
        {/* ---------- */}
      </div>
      {/* ---------- */}

      <FooterHome />
    </main>
  );
}
