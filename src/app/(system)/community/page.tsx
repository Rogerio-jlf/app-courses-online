"use client";

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Calendar,
  Trophy,
  MessageSquare,
  Bookmark,
  TrendingUp,
  Bell,
  Heart,
  Star,
  Activity,
} from "lucide-react";
import Footer from "@/components/Footer";

const CommunityPage = () => {
  const [dynamicClass, setDynamicClass] = useState("");

  useEffect(() => {
    // Gere a classe dinâmica apenas no cliente
    setDynamicClass("__variable_2dbf9b __variable_3292b7 antialiased");
  }, []);

  const topics = [
    {
      id: 1,
      title: "Tópico de Introdução",
      description: "Apresente-se à comunidade.",
      participants: 324,
      category: "Iniciantes",
      lastActivity: "há 5 minutos",
      tags: ["welcome", "newbie"],
      status: "hot",
    },
    {
      id: 2,
      title: "Discussão Técnica",
      description: "Dúvidas e conhecimento técnico.",
      participants: 512,
      category: "Tecnologia",
      lastActivity: "há 1 hora",
      tags: ["tech", "programming"],
      status: "trending",
    },
    {
      id: 3,
      title: "Dicas de Carreira",
      description: "Compartilhe dicas e experiências profissionais.",
      participants: 189,
      category: "Carreira",
      lastActivity: "há 3 horas",
      tags: ["career", "tips"],
    },
    {
      id: 4,
      title: "Desenvolvimento Web",
      description: "Discussões sobre desenvolvimento web.",
      participants: 421,
      category: "Desenvolvimento",
      lastActivity: "há 1 dia",
      tags: ["web", "frontend", "backend"],
    },
    {
      id: 5,
      title: "Dicas de SEO",
      description: "Melhore o SEO do seu site com dicas práticas.",
      participants: 98,
      category: "Marketing",
      lastActivity: "há 2 dias",
      tags: ["seo", "marketing", "google"],
    },
    {
      id: 6,
      title: "Dicas para Deploy",
      description: "Compartilhe dicas para deploy de aplicações.",
      participants: 76,
      category: "DevOps",
      lastActivity: "há 3 dias",
      tags: ["deploy", "devops", "cloud"],
    },
    {
      id: 7,
      title: "Como começar com React?",
      description: "Dicas para começar a aprender React.",
      participants: 123,
      category: "React",
      lastActivity: "há 4 dias",
      tags: ["react", "javascript", "frontend"],
    },
    {
      id: 8,
      title: "Dicas de Segurança",
      description: "Mantenha sua aplicação segura com dicas práticas.",
      participants: 54,
      category: "Segurança",
      lastActivity: "há 5 dias",
      tags: ["security", "privacy", "protection"],
    },
    {
      id: 9,
      title: "Dicas de UX",
      description: "Melhore a experiência do usuário com dicas práticas.",
      participants: 87,
      category: "Design",
      lastActivity: "há 6 dias",
      tags: ["ux", "design", "ui"],
    },
  ];

  const trendingTopics = [
    {
      id: 1,
      title: "Inteligência artificial no desenvolvimento",
      category: "Tech",
      engagementRate: 95,
      views: 15243,
      discussions: 324,
      timeframe: "nas últimas semanas",
      tags: ["AI", "desenvolvimento", "futuro"],
      highlights: [
        {
          user: "Maria Silva",
          comment: "O impacto da IA no desenvolvimento de software é inegável",
        },
        {
          user: "João Paulo",
          comment: "Ferramentas de IA já fazem parte do meu workflow diário",
        },
      ],
    },
    {
      id: 2,
      title: "Web Assembly: O futuro da web?",
      category: "Desenvolvimento Web",
      engagementRate: 88,
      views: 12150,
      discussions: 245,
      timeframe: "nos últimos 3 dias",
      tags: ["webassembly", "performance", "web"],
      highlights: [
        {
          user: "Ana Costa",
          comment: "WebAssembly revolucionou nossos apps web",
        },
        {
          user: "Carlos Santos",
          comment: "A performance é simplesmente impressionante",
        },
      ],
    },
    {
      id: 3,
      title: "Clean architecture na prática",
      category: "Arquitetura",
      engagementRate: 92,
      views: 10890,
      discussions: 198,
      timeframe: "nas última semana",
      tags: ["arquitetura", "boas-práticas", "clean-code"],
      highlights: [
        {
          user: "Pedro Alves",
          comment: "Este padrão mudou a forma como estruturo meus projetos",
        },
        {
          user: "Laura Mendes",
          comment: "Excelente para manutenibilidade a longo prazo",
        },
      ],
    },
    {
      id: 4,
      title: "GraphQL vs REST: Qual escolher?",
      category: "APIs",
      engagementRate: 85,
      views: 9876,
      discussions: 176,
      timeframe: "nas últimas semanas",
      tags: ["graphql", "rest", "api"],
      highlights: [
        {
          user: "Ricardo Oliveira",
          comment: "GraphQL é a evolução natural das APIs REST",
        },
        {
          user: "Fernanda Souza",
          comment: "REST ainda é a melhor escolha para projetos menores",
        },
      ],
    },
    {
      id: 5,
      title: "Dicas para um bom design de API",
      category: "APIs",
      engagementRate: 90,
      views: 8765,
      discussions: 154,
      timeframe: "nos últimos 3 dias",
      tags: ["api", "design", "boas-práticas"],
      highlights: [
        {
          user: "Mariana Santos",
          comment: "Design de API é tão importante quanto o código em si",
        },
        {
          user: "Paulo Lima",
          comment: "APIs bem estruturadas facilitam a integração",
        },
      ],
    },
    {
      id: 6,
      title: "Dicas para um bom design de API",
      category: "APIs",
      engagementRate: 90,
      views: 8765,
      discussions: 154,
      timeframe: "nos últimos 3 dias",
      tags: ["api", "design", "boas-práticas"],
      highlights: [
        {
          user: "Mariana Santos",
          comment: "Design de API é tão importante quanto o código em si",
        },
        {
          user: "Paulo Lima",
          comment: "APIs bem estruturadas facilitam a integração",
        },
      ],
    },
  ];

  const events = [
    {
      title: "Workshop de React",
      date: "20 de Julho",
      time: "19:00",
      participants: 45,
      category: "Tecnologia",
      status: "upcoming",
    },
    {
      title: "Hackathon de Inovação",
      date: "5 de Agosto",
      time: "09:00",
      participants: 120,
      category: "Evento",
      status: "featured",
    },
    {
      title: "Webinar de UX",
      date: "15 de Agosto",
      time: "15:00",
      participants: 78,
      category: "Design",
      status: "upcoming",
    },
    {
      title: "Meetup de Networking",
      date: "25 de Agosto",
      time: "18:30",
      participants: 98,
      category: "Networking",
      status: "upcoming",
    },
  ];

  const featuredMembers = [
    {
      name: "João Silva",
      role: "Top Contribuidor",
      points: 1520,
      badge: "🏆",
      contributions: 234,
      level: 42,
    },
    {
      name: "Maria Santos",
      role: "Especialista",
      points: 1350,
      badge: "⭐",
      contributions: 189,
      level: 38,
    },
    {
      name: "Pedro Alves",
      role: "Membro Ativo",
      points: 1200,
      badge: "🎖️",
      contributions: 176,
      level: 34,
    },
    {
      name: "Ana Costa",
      role: "Membro Destaque",
      points: 1050,
      badge: "🥇",
      contributions: 154,
      level: 30,
    },
    {
      name: "Carlos Santos",
      role: "Membro Iniciante",
      points: 900,
      badge: "🥈",
      contributions: 132,
      level: 26,
    },
    {
      name: "Laura Mendes",
      role: "Membro Novato",
      points: 750,
      badge: "🥉",
      contributions: 108,
      level: 22,
    },
  ];

  return (
    <div className={`${dynamicClass} bg-neutral-950/95 font-kodchasan`}>
      <header className="mt-24 px-4 py-12 sm:px-6 lg:px-8">
        <div className="m-auto max-w-6xl text-center">
          <h1 className="text-left text-6xl text-violet-600">Comunidade Dev</h1>

          <p className="text-left text-2xl italic text-white">
            Conecte-se, Aprenda e Compartilhe
          </p>
        </div>
      </header>
      {/* ---------- */}

      <main className="min-h-screen">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <nav aria-label="Seções principais">
            <Tabs defaultValue="topics" className="w-full">
              <TabsList className="mb-8 bg-neutral-800">
                <TabsTrigger
                  value="topics"
                  className="data-[state=active]:bg-green-500 data-[state=active]:text-lg data-[state=active]:font-semibold data-[state=active]:text-black"
                >
                  <MessageSquare className="mr-2 h-6 w-6" aria-hidden="true" />
                  <span>Tópicos</span>
                </TabsTrigger>

                <TabsTrigger
                  value="trending"
                  className="data-[state=active]:bg-green-500 data-[state=active]:text-lg data-[state=active]:font-semibold data-[state=active]:text-black"
                >
                  <TrendingUp className="mr-2 h-6 w-6" aria-hidden="true" />
                  <span>Trending</span>
                </TabsTrigger>

                <TabsTrigger
                  value="events"
                  className="data-[state=active]:bg-green-500 data-[state=active]:text-lg data-[state=active]:font-semibold data-[state=active]:text-black"
                >
                  <Calendar className="mr-2 h-6 w-6" aria-hidden="true" />
                  <span>Eventos</span>
                </TabsTrigger>

                <TabsTrigger
                  value="members"
                  className="data-[state=active]:bg-green-500 data-[state=active]:text-lg data-[state=active]:font-semibold data-[state=active]:text-black"
                >
                  <Users className="mr-2 h-6 w-6" aria-hidden="true" />
                  <span>Membros</span>
                </TabsTrigger>
              </TabsList>

              {/* SEÇÃO - TÓPICOS */}
              <section aria-labelledby="topics-heading">
                <TabsContent value="topics">
                  <h2 id="topics-heading" className="text-3xl text-white">
                    Tópicos da comunidade
                  </h2>

                  <p className="mb-8 font-semibold italic text-white">
                    Encontre tópicos de discussão, dúvidas e compartilhamento de
                    conhecimento.
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    {topics.map((topic) => (
                      <article key={topic.id} className="group">
                        <Card className="border-none bg-gradient-to-br from-violet-950 to-black/20 shadow-lg shadow-black">
                          <CardHeader className="">
                            <div className="flex items-center justify-between">
                              <h3 className="text-2xl font-bold text-white">
                                {topic.title}
                              </h3>

                              <Badge className="bg-green-500 text-sm font-extrabold text-black">
                                {topic.category}
                              </Badge>
                            </div>
                          </CardHeader>

                          <CardContent className="pt-4">
                            <p className="mb-4 text-white">
                              {topic.description}
                            </p>

                            <div className="flex items-center justify-between text-sm">
                              <span className="flex items-center gap-2 text-white">
                                <Users className="h-4 w-4" aria-hidden="true" />
                                <span>{topic.participants} participantes</span>
                              </span>

                              <time className="text-white">
                                {topic.lastActivity}
                              </time>
                            </div>
                            <ul
                              className="mt-4 flex gap-2"
                              role="list"
                              aria-label="Tags do tópico"
                            >
                              {topic.tags.map((tag) => (
                                <li key={tag}>
                                  <Badge
                                    variant="outline"
                                    className="border-none bg-green-500 text-sm text-black"
                                  >
                                    #{tag}
                                  </Badge>
                                </li>
                              ))}
                            </ul>
                            {topic.status === "hot" && (
                              <div
                                className="mt-3 flex items-center gap-1 text-sm font-semibold text-green-400"
                                aria-label="Tópico em alta"
                              >
                                <Activity
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />{" "}
                                Hot Topic
                              </div>
                            )}
                            {topic.status === "trending" && (
                              <div
                                className="mt-3 flex items-center gap-1 text-sm text-green-400"
                                aria-label="Tópico em tendência"
                              >
                                <TrendingUp
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />{" "}
                                Trending
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </article>
                    ))}
                  </div>
                </TabsContent>
              </section>
              {/* ---------- */}

              {/* SEÇÃO - TENDÊNCIAS */}
              <section aria-labelledby="trending-heading">
                <TabsContent value="trending">
                  <h2 id="trending-heading" className="text-3xl text-white">
                    Tópicos em tendência
                  </h2>

                  <p className="mb-8 font-semibold italic text-white">
                    Acompanhe os tópicos mais quentes da comunidade.
                  </p>

                  <div className="space-y-6">
                    {trendingTopics.map((topic) => (
                      <article
                        key={topic.id}
                        className="group rounded-lg border-none bg-gradient-to-br from-violet-950 to-black/20 p-6 shadow-lg shadow-black"
                      >
                        <header className="mb-4 flex items-start justify-between">
                          <div>
                            <h3 className="mb-8 text-2xl font-bold text-white">
                              {topic.title}
                            </h3>

                            <Badge className="bg-green-500 text-sm font-extrabold text-black">
                              {topic.category}
                            </Badge>
                          </div>

                          <div className="flex flex-col items-end">
                            <div className="flex items-center gap-2 text-green-500">
                              <TrendingUp
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                              <span className="font-bold">
                                {topic.engagementRate}% de engajamento
                              </span>
                            </div>
                            <p className="text-sm text-white">
                              {topic.timeframe}
                            </p>
                          </div>
                        </header>

                        <div className="mb-8 grid grid-cols-3 gap-4">
                          <div className="flex flex-col items-center rounded-lg bg-black/40 p-3 shadow-md shadow-black">
                            <span className="text-lg font-semibold text-white">
                              {topic.views.toLocaleString()}
                            </span>

                            <span className="text-sm text-white">
                              visualizações
                            </span>
                          </div>

                          <div className="flex flex-col items-center rounded-lg bg-black/40 p-3 shadow-md shadow-black">
                            <span className="text-lg font-semibold text-white">
                              {topic.discussions}
                            </span>

                            <span className="text-sm text-white">
                              discussões
                            </span>
                          </div>

                          <div className="flex flex-col items-center rounded-lg bg-black/40 p-3 shadow-md shadow-black">
                            <span className="text-lg font-semibold text-white">
                              {topic.tags.length}
                            </span>

                            <span className="text-sm text-white">tags</span>
                          </div>
                        </div>

                        <div className="mb-8">
                          <h4 className="mb-2 font-semibold text-white">
                            Destaques da discussão:
                          </h4>

                          <ul className="space-y-4">
                            {topic.highlights.map((highlight, index) => (
                              <li
                                key={index}
                                className="rounded-lg bg-black/40 p-3 shadow-md shadow-black"
                              >
                                <p className="text-white">
                                  <span className="font-semibold text-white">
                                    {highlight.user}:
                                  </span>{" "}
                                  {highlight.comment}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <footer>
                          <div className="mb-8 flex flex-wrap gap-2">
                            {topic.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="border-none bg-green-500 text-sm font-extrabold text-black"
                              >
                                #{tag}
                              </Badge>
                            ))}
                          </div>

                          <button
                            type="button"
                            className="text-md flex items-center gap-2 rounded-full bg-violet-900 px-4 py-2 font-semibold text-violet-100 transition-colors hover:bg-violet-600 active:scale-90"
                            aria-label={`Participar da discussão sobre ${topic.title}`}
                          >
                            <MessageSquare
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                            Participar da discussão
                          </button>
                        </footer>
                      </article>
                    ))}
                  </div>
                </TabsContent>
              </section>
              {/* ---------- */}

              {/* SEÇÃO - EVENTOS */}
              <section aria-labelledby="events-heading">
                <TabsContent value="events">
                  <h2 id="events-heading" className="text-3xl text-white">
                    Eventos da comunidade
                  </h2>

                  <p className="mb-8 font-semibold italic text-white">
                    Acompanhe os próximos eventos e workshops da comunidade.
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    {events.map((event) => (
                      <article key={event.title} className="group">
                        <Card className="border-none bg-gradient-to-br from-violet-950 to-black/20 shadow-lg shadow-black">
                          <CardContent className="pt-6">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="mb-8 text-2xl font-bold text-white">
                                  {event.title}
                                </h3>

                                <time className="mb-4 block text-green-500">
                                  {event.date} às {event.time}
                                </time>
                              </div>

                              <Badge className="bg-green-500 text-sm font-extrabold text-black">
                                {event.category}
                              </Badge>
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-2 text-green-500">
                                <Users className="h-4 w-4" aria-hidden="true" />
                                <span>{event.participants} participantes</span>
                              </span>

                              <button
                                type="button"
                                className="text-md flex items-center gap-2 rounded-full bg-purple-900 px-4 py-2 font-semibold text-white transition-colors hover:bg-violet-600 active:scale-90"
                                aria-label="Definir lembrete para o evento"
                              >
                                <Bell className="h-4 w-4" aria-hidden="true" />{" "}
                                Lembrar-me
                              </button>
                            </div>

                            {event.status === "upcoming" && (
                              <div
                                className="mt-3 flex items-center gap-1 text-sm text-green-500"
                                aria-label="Evento próximo"
                              >
                                <Calendar
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />{" "}
                                Próximo Evento
                              </div>
                            )}
                            {event.status === "featured" && (
                              <div
                                className="mt-3 flex items-center gap-1 text-sm text-green-500"
                                aria-label="Evento em destaque"
                              >
                                <Star className="h-4 w-4" aria-hidden="true" />{" "}
                                Evento em Destaque
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </article>
                    ))}
                  </div>
                </TabsContent>
              </section>
              {/* ---------- */}

              {/* SEÇÃO - MEMBROS */}
              <section aria-labelledby="members-heading">
                <TabsContent value="members">
                  <h2 id="members-heading" className="text-3xl text-white">
                    Membros em destaque
                  </h2>

                  <p className="mb-8 font-semibold italic text-white">
                    Conheça os membros mais ativos da comunidade.
                  </p>

                  <div className="grid gap-6 md:grid-cols-3">
                    {featuredMembers.map((member) => (
                      <article key={member.name} className="group">
                        <Card className="border-none bg-gradient-to-br from-violet-950 to-black/20 shadow-lg shadow-black">
                          <CardContent className="pt-6">
                            <div className="text-center">
                              <span
                                className="mb-4 text-4xl"
                                role="img"
                                aria-label="Badge do membro"
                              >
                                {member.badge}
                              </span>

                              <h3 className="text-2xl font-bold text-white">
                                {member.name}
                              </h3>

                              <p className="text-md mb-4 text-green-500">
                                {member.role}
                              </p>

                              <dl className="mb-4 flex justify-center gap-4 text-2xl">
                                <div className="flex items-center gap-1 text-yellow-500">
                                  <dt className="sr-only">Pontos</dt>
                                  <Trophy
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                  <dd>{member.points}</dd>
                                </div>

                                <div className="flex items-center gap-1 text-violet-400">
                                  <dt className="sr-only">Contribuições</dt>
                                  <MessageSquare
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                  <dd>{member.contributions}</dd>
                                </div>
                              </dl>

                              <div className="flex items-center justify-center gap-2 text-xl text-white">
                                <Star
                                  className="h-6 w-6 text-yellow-500"
                                  aria-hidden="true"
                                />
                                <span>Nível {member.level}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </article>
                    ))}
                  </div>
                </TabsContent>
              </section>
              {/* ---------- */}
            </Tabs>
          </nav>
          {/* ---------- */}

          {/* SEÇÃO - ATIVIDADES RECENTES */}
          <section aria-labelledby="activities-heading" className="mt-12">
            <h2 id="activities-heading" className="text-3xl text-white">
              Atividades Recentes
            </h2>

            <p className="mb-8 italic text-white">
              Acompanhe as últimas atividades da comunidade, como curtidas,
              comentários e salvamentos.
            </p>
            <ul
              role="feed"
              aria-label="Feed de atividades"
              className="space-y-4"
            >
              <li>
                <Card className="border-none bg-gradient-to-br from-violet-950 to-black/20 shadow-md shadow-black">
                  <CardContent className="flex items-center gap-4 p-4">
                    <Heart
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-white">
                        <span className="font-bold text-white">Ana Lima</span>{" "}
                        curtiu sua resposta em &quot;Como começar com
                        React?&quot;
                      </p>
                      <time className="text-sm text-violet-500">
                        há 10 minutos
                      </time>
                    </div>
                  </CardContent>
                </Card>
              </li>

              <li>
                <Card className="border-none bg-gradient-to-br from-violet-950 to-black/20 shadow-md shadow-black">
                  <CardContent className="flex items-center gap-4 p-4">
                    <MessageSquare
                      className="h-5 w-5 text-blue-500"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-white">
                        <span className="font-bold text-white">
                          Carlos Silva
                        </span>{" "}
                        comentou no tópico &quot;Dicas para Deploy&quot;
                      </p>
                      <time className="text-sm text-violet-500">
                        há 30 minutos
                      </time>
                    </div>
                  </CardContent>
                </Card>
              </li>

              <li>
                <Card className="border-none bg-gradient-to-br from-violet-950 to-black/20 shadow-md shadow-black">
                  <CardContent className="flex items-center gap-4 p-4">
                    <Bookmark
                      className="h-5 w-5 text-yellow-500"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-white">
                        <span className="font-bold text-white">
                          Joana Pereira
                        </span>{" "}
                        salvou o tópico &quot;Dicas de SEO&quot;
                      </p>
                      <time className="text-sm text-violet-500">há 1 hora</time>
                    </div>
                  </CardContent>
                </Card>
              </li>

              <li>
                <Card className="border-none bg-gradient-to-br from-violet-950 to-black/20 shadow-md shadow-black">
                  <CardContent className="flex items-center gap-4 p-4">
                    <Star
                      className="h-5 w-5 text-yellow-500"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-white">
                        <span className="font-bold text-white">
                          Pedro Alves
                        </span>{" "}
                        subiu de nível para 34
                      </p>
                      <time className="text-sm text-violet-500">
                        há 2 horas
                      </time>
                    </div>
                  </CardContent>
                </Card>
              </li>

              <li>
                <Card className="border-none bg-gradient-to-br from-violet-950 to-black/20 shadow-md shadow-black">
                  <CardContent className="flex items-center gap-4 p-4">
                    <Activity
                      className="h-5 w-5 text-green-500"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-white">
                        <span className="font-bold text-white">
                          Maria Santos
                        </span>{" "}
                        completou 100 contribuições
                      </p>
                      <time className="text-sm text-violet-500">
                        há 3 horas
                      </time>
                    </div>
                  </CardContent>
                </Card>
              </li>
            </ul>
          </section>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default CommunityPage;
