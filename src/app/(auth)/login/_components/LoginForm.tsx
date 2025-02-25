"use client";

import { useSignIn } from "@clerk/nextjs";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "sonner";
import Spinner from "@/components/Spinner";
import { Tooltip } from "@mui/material";
import { IoHome } from "react-icons/io5";

export default function LoginForm() {
  const router = useRouter();
  const { isLoaded, signIn, setActive } = useSignIn();
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [messageColorEmail, setMessageColorEmail] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const [messageColorPassword, setMessageColorPassword] = useState("");

  // Lida com as mudanças no formulário
  function handleChangeFormData(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "email") {
      if (value === "") {
        setMessageColorEmail("");
      } else if (!validateEmail(value)) {
        setMessageColorEmail('O email deve conter um "@" e o domínio ".com".');
        setErrorMessageEmail("");
      } else {
        setMessageColorEmail("Email Válido");
      }
    }

    if (name === "password") {
      if (value === "") {
        setMessageColorPassword("");
      } else if (!validatePassword(value)) {
        setMessageColorPassword(
          "A senha deve conter no mínimo 8 caracteres. Deve conter uma letra maiúscula e um caractere especial.",
        );
        setErrorMessagePassword("");
      } else {
        setMessageColorPassword("Senha Válida");
      }
    }
  }
  // -------------------- //

  // Lida com a validação do email
  function validateEmail(email: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com(\.[a-zA-Z]{2,})?$/;
    return regex.test(email);
  }
  // -------------------- //

  // Lida com a validação da senha
  function validatePassword(password: string) {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    return regex.test(password);
  }
  // -------------------- //

  // Lida com a exibição da senha
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }
  // -------------------- //

  // Lida com o envio do formulário
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateEmail(formData.email)) {
      setErrorMessageEmail(
        'Email Inválido. O email deve conter um "@" e o domínio ".com".',
      );

      setMessageColorEmail("");
      return;
    }

    if (!validatePassword(formData.password)) {
      setErrorMessagePassword(
        "Senha Inválida. A senha deve conter no mínimo 8 caracteres. Deve conter uma letra maiúscula e um caractere especial.",
      );

      setMessageColorPassword("");
      return;
    }

    if (!isLoaded || !signIn) {
      return null;
    }

    setIsLoading(true);

    setTimeout(async () => {
      try {
        const result = await signIn?.create({
          identifier: formData.email,
          password: formData.password,
        });

        if (result && result.status === "complete") {
          if (setActive) {
            await setActive({ session: result.createdSessionId });
          }
          router.push("/home");
        }
      } catch (err) {
        if (isClerkAPIResponseError(err)) {
          return toast.error(err.errors[0]?.message);
        }
        toast.error("Erro ao fazer login");
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  }
  // -------------------- //

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-blue-300 via-pink-400 to-slate-500">
      <section className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        {/* image */}
        <div className="relative mb-4 flex justify-center">
          <div className="animate-pulse-slow rounded-full bg-gradient-to-r from-teal-600 to-pink-600 p-1 shadow-xl transition-all duration-500 hover:rotate-2 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]">
            <Image
              src="/login.jpg"
              alt="Verify Email"
              width={130}
              height={130}
              className="animate-pulse-slow rounded-full border-2 border-teal-600 shadow-xl transition-all duration-500 hover:rotate-2 hover:scale-110 hover:border-pink-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            />
          </div>
        </div>
        {/* -------------------- */}

        {/* Link para página inicial */}
        <div>
          <Tooltip
            title="Ir para página inicial"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  fontSize: "14px",
                  backgroundColor: "black",
                  fontFamily: "cursive",
                },
              },
              arrow: { sx: { color: "black" } },
            }}
          >
            <Link
              href="/"
              className="absolute right-[741px] top-[136px] transform rounded-full border-2 border-pink-600 bg-black p-2 text-white transition duration-300 hover:scale-125 hover:bg-white hover:text-black"
            >
              <IoHome className="cursor-pointer text-lg" />
            </Link>
          </Tooltip>
        </div>
        {/* -------------------- */}

        <form onSubmit={handleSubmit}>
          {/* title */}
          <h2 className="mb-16 text-center text-3xl font-bold text-black">
            Faça Login
          </h2>

          {/* Input email */}
          <div className="relative mb-10">
            <label
              htmlFor="email"
              className="text-md mb-1 block font-semibold italic text-black"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Digite seu email..."
              value={formData.email}
              onChange={handleChangeFormData}
              className="w-full transform rounded border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 placeholder-gray-400 transition duration-300 placeholder:italic hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <div className="absolute bottom-0 left-0 w-full translate-y-full transform">
              {messageColorEmail && (
                <p className="mt-1 text-sm font-semibold italic text-blue-600">
                  {messageColorEmail}
                </p>
              )}
              {errorMessageEmail && (
                <p className="mt-1 text-sm font-semibold italic text-red-600">
                  {errorMessageEmail}
                </p>
              )}
            </div>
          </div>
          {/* -------------------- */}

          {/* Input password - link esqueceu sua senha */}
          <div className="relative">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-md mb-1 block font-semibold italic text-black"
              >
                Senha
              </label>

              <Link
                href="/reset-password"
                className="text-sm font-semibold italic text-blue-600 hover:text-pink-600"
              >
                Esqueceu sua senha?
              </Link>
            </div>

            <div className="relative mb-16">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                placeholder="Digite sua senha..."
                value={formData.password}
                onChange={handleChangeFormData}
                className="w-full transform rounded border border-gray-300 bg-gray-50 px-4 py-2 pr-10 text-gray-900 placeholder-gray-400 transition duration-300 placeholder:italic hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {showPassword ? (
                <FaEyeSlash
                  size={24}
                  onClick={handleShowPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-gray-500 transition duration-300 hover:scale-125"
                />
              ) : (
                <FaEye
                  size={24}
                  onClick={handleShowPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-gray-500 transition duration-300 hover:scale-125"
                />
              )}
            </div>

            <div className="absolute bottom-0 left-0 w-full translate-y-full transform">
              {messageColorPassword && (
                <p className="mt-1 text-sm font-semibold italic text-blue-600">
                  {messageColorPassword}
                </p>
              )}
              {errorMessagePassword && (
                <p className="mt-1 text-sm font-semibold italic text-red-600">
                  {errorMessagePassword}
                </p>
              )}
            </div>
          </div>
          {/* -------------------- */}

          {/* Captcha */}
          <div id="clerk-captcha"></div>
          {/* -------------------- */}

          {/* button submit */}
          <div className="relative mb-10">
            <button
              type="submit"
              className="flex w-full transform justify-center gap-4 rounded-md bg-gradient-to-r from-blue-500 via-pink-600 to-slate-700 px-4 py-2 text-lg font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {isLoading ? (
                <>
                  <Spinner /> Entrando...
                </>
              ) : (
                "Entrar"
              )}
            </button>
          </div>

          {/* link crie sua conta */}
          <div>
            <p className="text-center text-sm font-semibold italic text-black">
              Ainda não tem conta?{" "}
              <Link
                href="/sign-up"
                className="text-lg font-semibold italic text-blue-600 hover:text-pink-600"
              >
                Crie sua conta
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}
