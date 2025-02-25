"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3,
  faGolang,
  faHtml5,
  faJava,
  faJs,
  faNode,
  faPhp,
  faPix,
  faPython,
  faReact,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowDown,
  faArrowsRotate,
  faCheckToSlot,
  faCirclePlay,
  faClock,
  faComputer,
  faCreditCard,
  faEnvelope,
  faFileInvoiceDollar,
  faPhone,
  faPlay,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function PlanoPage() {
  const { plano } = useParams() as { plano: keyof typeof planos };
  const [dynamicClass, setDynamicClass] = useState("");

  useEffect(() => {
    // Gere a classe dinâmica apenas no cliente
    setDynamicClass("__variable_2dbf9b __variable_3292b7 antialiased");
  }, []);

  const planos = {
    basico: {
      nome: "Plano Básico",
      preco: "R$ 29,90/mês",
      descricao: "Acesso a conteúdos gratuitos e suporte limitado.",
      beneficios: [
        "Acesso a cursos gratuitos",
        "Suporte básico",
        "Comunidade de estudantes",
      ],
      tecnologias: ["HTML", "CSS", "JavaScript"],
    },

    padrao: {
      nome: "Plano Padrão",
      preco: "R$ 59,90/mês",
      descricao: "Acesso a todos os cursos e suporte prioritário.",
      beneficios: [
        "Acesso a todos os cursos",
        "Suporte prioritário",
        "Certificado de conclusão",
      ],
      tecnologias: ["HTML", "CSS", "JavaScript", "React", "Node-js"],
    },

    premium: {
      nome: "Plano Premium",
      preco: "R$ 99,90/mês",
      descricao:
        "Do zero ao avançado, todas as formações, cursos, eventos e experiências em uma única assinatura.",
      beneficios: [
        "Acesso ilimitado a todos os cursos",
        "Mentorias individuais",
        "Certificado premium",
        "Acesso a eventos exclusivos",
        "Mais de 100 projetos para o seu portfólio",
        "Mais de 1.000 horas de conteúdo exclusivo",
        "Suporte prioritário",
      ],
      tecnologias: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "PHP",
        "Python",
        "Java",
        "Golang",
        "Node-js",
        "Angular",
      ],
    },
  };

  const iconesTecnologias: { [key: string]: IconDefinition } = {
    JavaScript: faJs,
    PHP: faPhp,
    React: faReact,
    Python: faPython,
    Java: faJava,
    "Node-js": faNode,
    Angular: faAngular,
    Golang: faGolang,
    HTML: faHtml5,
    CSS: faCss3,
  };

  // Mapeamento de cores
  const coresTecnologias: { [key: string]: string } = {
    JavaScript: "#F7DF1E", // Amarelo
    PHP: "#777BB4", // Azul roxo
    React: "#61DAFB", // Azul claro
    Python: "#3776AB", // Azul escuro
    Java: "#007396", // Azul médio
    "Node-js": "#68A063", // Verde
    Angular: "#DD0031", // Vermelho
    Golang: "#00ADD8", // Azul turquesa
    HTML: "#E34F26", // Laranja
    CSS: "#1572B6", // Azul
  };

  const depoimentosAlunos = {
    depoimentos: [
      {
        nome: "João Silva",
        texto:
          "A plataforma é incrível, a didática é excelente! Sem palavras para descrever o trabalho de vcs! Obrigado, vocês são fenomenais e tem me ajudado muito a crescer como dev!",
      },
      {
        nome: "Maria Souza",
        texto:
          "Aprendi muito e de maneira bem rápida, consegui um novo emprego em uma empresa incrível e trabalho com o que eu amo nas tecnologias que eu mais gosto no momento. Só tenho a agradecer a toda a equipe por tornar isso possível!",
      },
      {
        nome: "Ana Costa",
        texto:
          "Tenho aprendido demais, eu iniciei do zero e hoje eu tô já fazendo JavaScript. É um novo mundo que se abriu pra mim, eu nunca imaginei que eu teria capacidade de codar, e hoje eu sou uma coroa que coda, me sinto um ser útil pra sociedade.",
      },
      {
        nome: "Carlos Oliveira",
        texto:
          "O curso tem sido incrível na minha vida porque, com os conhecimentos que eu tenho até agora, já consegui refazer o layout do site da empresa em que trabalho só com CSS.",
      },
      {
        nome: "Pedro Santos",
        texto:
          "Me sinto feliz de ter conseguido minha primeira vaga e ter realizado meu sonho, mas é apenas o começo da carreira e cada vez procurar evoluir mais. O Explorer pra mim foi uma virada de chave em minha vida e realmente me fez acreditar que eu posso aprender.",
      },
      {
        nome: "Fernanda Lima",
        texto:
          "Hoje faço trabalhos para clientes até fora do Brasil, e isso em 11 meses que comecei a aprender com a plataforma. Tenho orgulho de dizer que recebo no mínimo 3 contatos para entrevistas pelo LinkedIn por semana, e sou um profissional procurado.",
      },
    ],
  };

  // Obter os dados do plano escolhido
  const dadosPlano = planos[plano as keyof typeof planos];

  // Se o plano não existir, exiba uma mensagem de erro
  if (!dadosPlano) {
    return (
      <main className="bg-gray-950">
        <section className="mt-24 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="animate-gradient-x bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-center text-6xl font-extrabold text-transparent">
              Plano não encontrado
            </h1>
            <p className="text-xl font-semibold italic text-gray-300">
              O plano selecionado não existe. Por favor, escolha um plano
              válido.
            </p>
            <Link
              href="/"
              className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-gray-300 shadow-md transition-all duration-300 hover:scale-105 hover:animate-pulse hover:shadow-lg active:scale-95"
            >
              Voltar para a página inicial
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={`${dynamicClass} bg-neutral-950/95 font-kodchasan`}>
      {/* SEÇÃO, HEADER */}
      <section className="mt-24 px-4 py-12 sm:px-6 lg:px-8">
        {/* Container geral */}
        <div className="mx-auto max-w-3xl text-gray-300">
          <header className="text-center">
            {/* Título */}
            <h1 className="mb-8 text-center text-5xl font-extrabold">
              Sua jornada de{" "}
              <span className="bg-gradient-to-r from-pink-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
                aprendizado continuo
              </span>{" "}
              em programação
            </h1>

            {/* Container, imagens e descrição */}
            <div className="flex items-center justify-center gap-20 space-x-4">
              {/* Imagens */}
              <div className="flex -space-x-4">
                <Image
                  src="/pessoa1.jpg"
                  alt="Pessoa 1"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full"
                />
                <Image
                  src="/pessoa2.jpg"
                  alt="Pessoa 2"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full"
                />
                <Image
                  src="/pessoa3.webp"
                  alt="Pessoa 3"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full"
                />
                <Image
                  src="/pessoa4.webp"
                  alt="Pessoa 4"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full"
                />
              </div>

              {/* Descrição */}
              <div>
                <p className="text-md font-semibold italic text-gray-300">
                  Junte-se a mais de 30.000 alunos e alunas, no Brasil e no
                  Mundo inteiro, que estão aprendendo a programar e a criar
                  sites e aplicativos incríveis.
                </p>
              </div>
            </div>
          </header>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO, CARD ESCOLHIDO / FORMULÁRIO */}
      <section className="bg-gray-950 px-4 py-12 sm:px-6 lg:px-8">
        {/* Container geral */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 text-gray-300 lg:grid-cols-2">
          {/* Container do card escolhido */}
          <div className="flex h-full w-full flex-col justify-center rounded-l-2xl bg-gradient-to-r from-blue-700 to-pink-500 p-10 lg:flex-row">
            <article className="flex w-full flex-col justify-between rounded-2xl bg-black p-8 shadow-lg">
              <div className="flex flex-col gap-6">
                {/* Títulos */}
                <header>
                  <h2 className="mb-1 text-3xl font-bold">{dadosPlano.nome}</h2>
                  <p className="text-md">{dadosPlano.descricao}</p>
                </header>

                {/* Tecnologias */}
                <div>
                  <h3 className="mb-1 text-xl font-bold italic">Tecnologias</h3>
                  <div className="flex flex-wrap gap-5">
                    {dadosPlano.tecnologias.map((tecnologia, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={iconesTecnologias[tecnologia] || faJs}
                        className="text-4xl"
                        style={{
                          color: coresTecnologias[tecnologia] || "#000000",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Benefícios */}
                <div>
                  <h3 className="mb-1 text-xl font-bold italic">Benefícios</h3>
                  <ul className="list-inside list-disc">
                    {dadosPlano.beneficios.map((beneficio, index) => (
                      <li key={index}>{beneficio}</li>
                    ))}
                  </ul>
                </div>

                {/* Valor */}
                <div>
                  <h3 className="mb-1 text-xl font-bold italic">Valor</h3>
                  <p className="text-3xl font-bold">{dadosPlano.preco}</p>
                </div>

                {/* Formas de Pagamento */}
                <div className="mb-8 flex flex-col gap-1">
                  <h3 className="mb-1 text-xl font-bold italic">
                    Formas de Pagamento
                  </h3>
                  <ul className="list-none">
                    <li className="mb-2 flex items-center">
                      <FontAwesomeIcon
                        icon={faCreditCard}
                        className="mr-2 text-xl"
                      />
                      <span>Cartão de Crédito</span>
                    </li>
                    <li className="mb-2 flex items-center">
                      <FontAwesomeIcon
                        icon={faFileInvoiceDollar}
                        className="mr-2 text-xl"
                      />
                      <span>Boleto Bancário</span>
                    </li>
                    <li className="flex items-center">
                      <FontAwesomeIcon icon={faPix} className="mr-2 text-xl" />
                      <span>Pix</span>
                    </li>
                  </ul>
                </div>

                {/* Escolher outro plano */}
                <Link
                  href="/plans"
                  className="text-md mt-auto font-semibold transition duration-200 hover:italic hover:text-pink-600"
                >
                  Escolher outro plano →
                </Link>
              </div>
            </article>
          </div>

          {/* Container do formulário */}
          <div className="rounded-r-2xl border-[1px] border-gray-900 bg-black p-10 shadow-lg">
            {/* Título */}
            <h2 className="mb-4 text-3xl font-bold text-gray-300">
              Inscreva-se Agora
            </h2>

            <form className="flex flex-col gap-4">
              {/* Input, nome completo */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nome Completo"
                  required
                  className="w-full rounded-lg bg-gray-700 p-3 pl-10 italic text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <FontAwesomeIcon
                  icon={faUser}
                  className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
                />
              </div>

              {/* Input, e-mail */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="E-mail"
                  required
                  className="w-full rounded-lg bg-gray-700 p-3 pl-10 italic text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
                />
              </div>

              {/* Input, telefone */}
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Número de Telefone"
                  required
                  className="w-full rounded-lg bg-gray-700 p-3 pl-10 italic text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <FontAwesomeIcon
                  icon={faPhone}
                  className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
                />
              </div>

              {/* Botão, inscrever-se */}
              <button
                type="submit"
                className="mb-36 inline-block w-full rounded-lg bg-teal-600 px-6 py-3 text-xl font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-75"
              >
                Inscrever-se
              </button>
            </form>

            {/* Card garantia */}
            <div className="rounded-lg bg-gradient-to-r from-pink-800 to-blue-800 p-4 text-center text-gray-200">
              <h1 className="text-2xl font-bold">
                Você tem 14 dias de garantia!
              </h1>
              <p className="text-md">
                Experimente! Se não gostar ou ver que não é para você,
                devolvemos o seu dinheiro! Sem letras miúdas.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO, COMO FUNCIONA A ASSINATURA */}
      <section className="px-4 py-12 text-gray-300 sm:px-6 lg:px-8">
        {/* Container geral */}
        <div className="mx-auto max-w-6xl">
          {/* Título */}
          <h1 className="mb-8 text-center text-4xl font-extrabold">
            Como funciona a assinatura
          </h1>

          {/* Container dos cards */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Card 1 */}
            <div className="flex w-64 flex-col items-start space-y-2 rounded-lg border-[1px] border-gray-500 bg-black p-4 shadow-lg">
              <FontAwesomeIcon
                icon={faComputer}
                className="mb-4 text-2xl text-yellow-500"
              />
              <div className="text-start">
                <h2 className="mb-2 text-xl font-bold">Acesso único</h2>
                <p className="text-sm">Conteúdo liberado na plataforma.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex w-64 flex-col items-start space-y-2 rounded-lg border-[1px] border-gray-500 bg-black p-4 shadow-lg">
              <FontAwesomeIcon
                icon={faPlay}
                className="mb-4 text-2xl text-yellow-500"
              />
              <div className="text-start">
                <h2 className="mb-2 text-xl font-bold">Início imediato</h2>
                <p className="text-sm">
                  Assista as aulas gravadas já disponíveis quando quiser.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex w-64 flex-col items-start space-y-2 rounded-lg border-[1px] border-gray-500 bg-black p-4 shadow-lg">
              <FontAwesomeIcon
                icon={faArrowsRotate}
                className="mb-4 text-2xl text-yellow-500"
              />
              <div className="text-start">
                <h2 className="mb-2 text-xl font-bold">Conteúdo atualizado</h2>
                <p className="text-sm">
                  Aulas atuais gravadas e novos conteúdos todos os meses.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex w-64 flex-col items-start space-y-2 rounded-lg border-[1px] border-gray-500 bg-black p-4 shadow-lg">
              <FontAwesomeIcon
                icon={faCheckToSlot}
                className="mb-4 text-2xl text-yellow-500"
              />
              <div className="text-start">
                <h2 className="mb-2 text-xl font-bold">
                  Novos lançamentos inclusos
                </h2>
                <p className="text-sm">
                  Pague mensalmente e receba todas as futuras formações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- */}

      {/* LINHA HORIZONTAL */}
      <div className="mx-auto max-w-7xl">
        <hr className="my-12 border-t-2 border-gray-700" />
      </div>
      {/* ---------- */}

      {/* SEÇÃO, INFORMAÇÕES GERAIS */}
      <section className="px-4 py-12 text-gray-300 sm:px-6 lg:px-8">
        {/* Container geral */}
        <div className="mx-auto mb-12 max-w-6xl">
          {/* Container dos cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="flex flex-col items-center rounded-lg border-[1px] border-pink-500 bg-black p-6 text-center shadow-lg">
              <FontAwesomeIcon
                icon={faStar}
                className="mb-4 text-4xl text-yellow-500"
              />
              <h2 className="mb-4 text-xl font-bold">Nota 4.9 de 5</h2>
              <p className="text-left text-sm">
                Quem faz aprova! Essa é a média de avaliação das nossas aulas na
                plataforma.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center rounded-lg border-[1px] border-pink-500 bg-black p-6 text-center shadow-lg">
              <FontAwesomeIcon
                icon={faCirclePlay}
                className="mb-4 text-4xl text-yellow-500"
              />
              <h2 className="mb-4 text-xl font-bold">+1.000 aulas</h2>
              <p className="text-left text-sm">
                Acesso imediato a todo conteúdo disponível na plataforma para
                assistir no seu ritmo. Com atualizações inclusas na assinatura.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center rounded-lg border-[1px] border-pink-500 bg-black p-6 text-center shadow-lg">
              <FontAwesomeIcon
                icon={faClock}
                className="mb-4 text-4xl text-yellow-500"
              />
              <h2 className="mb-4 text-xl font-bold">+1.100h de conteúdo</h2>
              <p className="text-left text-sm">
                Além das aulas gravadas você tem acesso a benefícios para
                assinantes: mentorias, masterclass ao vivo e eventos exclusivos
                para alunos.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center rounded-lg border-[1px] border-pink-500 bg-black p-6 text-center shadow-lg">
              <FontAwesomeIcon
                icon={faComputer}
                className="mb-4 text-4xl text-yellow-500"
              />
              <h2 className="mb-4 text-xl font-bold">+100 projetos práticos</h2>
              <p className="text-left text-sm">
                Você vai aprender na prática com diversos projetos e cases reais
                pra evoluir o seu portfólio, além de colecionar certificados
                para o seu currículo.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO, DEPOIMENTOS DE ALUNOS */}
      <section className="bg-gray-950 px-4 py-12 text-gray-300 sm:px-6 lg:px-8">
        {/* Container geral */}
        <div className="mx-auto mb-16 mt-8 max-w-6xl">
          {/* Container dos títulos */}
          <div className="mb-20 flex items-center justify-between">
            <h1 className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-4xl font-extrabold text-transparent">
              Eles conquistaram seus objetivos de carreira e transformaram suas
              vidas
            </h1>

            <div className="flex items-center space-x-2">
              <p className="text-lg font-semibold italic">
                O próximo depoimento pode ser seu!
              </p>
              <FontAwesomeIcon icon={faArrowDown} className="text-3xl" />
            </div>
          </div>

          {/* Container dos cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {depoimentosAlunos.depoimentos.map((depoimento, index) => (
              <div
                key={index}
                className={`transform rounded-lg bg-gray-950 p-6 shadow-lg shadow-yellow-500 transition-all duration-300 hover:scale-105 ${
                  index % 3 === 0
                    ? "md:col-span-6 lg:col-span-1 lg:rotate-6" // Card maior e levemente rotacionado
                    : index % 2 === 0
                      ? "lg:rotate-6" // Card levemente rotacionado
                      : "lg:-rotate-1" // Card levemente rotacionado no sentido oposto
                }`}
              >
                <p className="text-md mb-10 italic">{depoimento.texto}</p>
                <p className="text-md font-semibold italic text-pink-600">
                  {depoimento.nome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ---------- */}

      {/* SEÇÃO, AINDA TEM DÚVIDAS */}
      <section className="bg-gradient-to-r from-teal-700 via-blue-800 to-teal-700 px-4 py-12 text-gray-300 sm:px-6 lg:px-8">
        {/* Container geral */}
        <div className="mx-auto mt-4 max-w-6xl">
          {/* Título */}
          <h1 className="mb-8 text-center text-4xl font-extrabold">
            Ainda tem dúvidas?
          </h1>

          {/* Container dos cards */}
          <div className="flex justify-center gap-4 pb-2">
            {/* Card 1 */}
            <div className="flex w-1/2 cursor-pointer flex-col items-center rounded-lg bg-gray-950/70 p-6 text-center shadow-xl shadow-black transition-all duration-300 hover:scale-105 active:hover:scale-75">
              <FontAwesomeIcon
                icon={faPhone}
                className="mb-4 text-4xl text-pink-800"
              />
              <h2 className="mb-2 text-xl font-bold">Entre em contato</h2>
              <p className="text-sm">
                Fale conosco por telefone ou e-mail para obter mais informações.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex w-1/2 cursor-pointer flex-col items-center rounded-lg bg-gray-950/70 p-6 text-center shadow-xl shadow-black transition-all duration-300 hover:scale-105 active:hover:scale-75">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mb-4 text-4xl text-yellow-500"
              />
              <h2 className="mb-2 text-xl font-bold">Envie um e-email</h2>
              <p className="text-sm">
                Envie-nos um email com suas dúvidas e responderemos o mais
                rápido possível.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex w-1/2 cursor-pointer flex-col items-center rounded-lg bg-gray-950/70 p-6 text-center shadow-xl shadow-black transition-all duration-300 hover:scale-105 active:hover:scale-75">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="mb-4 text-4xl text-green-500"
              />
              <h2 className="mb-2 text-xl font-bold">Envie uma mensagem</h2>
              <p className="text-sm">
                Envie-nos uma mensagem com suas dúvidas e responderemos o mais
                rápido possível.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- */}

      <Footer />
    </main>
  );
}
