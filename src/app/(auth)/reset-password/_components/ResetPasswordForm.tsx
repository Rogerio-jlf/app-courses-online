"use client";

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import ResetVerifyEmailForm from "./ResetVerifyEmailForm";
import Spinner from "@/components/Spinner";
import { Tooltip } from "@mui/material";
import { IoHome } from "react-icons/io5";

export default function ResetPasswordForm() {
  const { isLoaded, signIn } = useSignIn();
  // estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [verificationCode, setVerificationCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [messageColorEmail, setMessageColorEmail] = useState("");

  // lida com as mudanças no formulário
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
  }
  // -------------------- //

  // lida com a validação do email
  function validateEmail(email: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com(\.[a-zA-Z]{2,})?$/;
    return regex.test(email);
  }
  // -------------------- //

  // lida com o envio do formulário
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateEmail(formData.email)) {
      setErrorMessageEmail(
        'Email Inválido. O email deve conter um "@" e o domínio ".com".'
      );

      setMessageColorEmail("");
      return;
    }

    if (!isLoaded) {
      return null;
    }

    setLoading(true);

    setTimeout(async () => {
      try {
        await signIn?.create({
          identifier: formData.email,
          strategy: "reset_password_email_code",
        });

        setVerificationCode(true);
      } catch (err) {
        if (isClerkAPIResponseError(err)) {
          return toast.error(err.errors[0]?.message);
        }
        toast.error("Erro ao redefinir senha");
      } finally {
        setLoading(false);
      }
    }, 2000);
  }
  // -------------------- //

  // verifica se o código de verificação foi enviado
  if (verificationCode) {
    return <ResetVerifyEmailForm />;
  }
  // -------------------- //

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-green-300 via-blue-400 to-slate-500">
      <section className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {/* imagem */}
        <div className="flex justify-center mb-4 relative">
          <div className="rounded-full p-1 bg-gradient-to-r from-teal-600 to-pink-600 shadow-xl transition-all duration-500 hover:scale-110 hover:rotate-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse-slow">
            <Image
              src="/reset-password.jpg"
              alt="Reset Password"
              width={130}
              height={130}
              className="rounded-full border-2 border-teal-600 shadow-xl transition-all duration-500 hover:scale-110 hover:rotate-2 hover:border-pink-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse-slow"
            />
          </div>
        </div>
        {/* -------------------- */}

        {/* link ir para página inicial */}
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
              className="absolute top-[191px] right-[741px] border-2 border-pink-600 bg-black rounded-full p-2 text-white transition duration-300 transform hover:scale-125 hover:bg-white hover:text-black"
            >
              <IoHome className="text-lg cursor-pointer" />
            </Link>
          </Tooltip>
        </div>
        {/* -------------------- */}

        <form onSubmit={handleSubmit}>
          {/* title */}
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            Redefinir Senha
          </h2>
          {/* -------------------- */}

          {/* input email */}
          <div className="relative mb-16">
            <label
              htmlFor="email"
              className="block text-md font-semibold italic text-black mb-1"
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
              className="w-full px-4 py-2 rounded border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 placeholder:italic focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 transform hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 transform translate-y-full w-full">
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

          {/* button submit */}
          <div className="relative mb-10">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-gradient-to-r from-green-500 via-blue-600 to-slate-700 px-4 py-2 text-lg font-semibold text-white shadow-sm hover:from-green-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-105 gap-4"
            >
              {loading ? (
                <>
                  <Spinner /> Redefinindo...
                </>
              ) : (
                "Redefinir"
              )}
            </button>
          </div>
          {/* -------------------- */}

          {/* link faça login */}
          <div>
            <p className="text-center text-sm font-semibold italic text-black">
              Lembrou-se da senha?{" "}
              <Link
                href="/login"
                className="text-lg font-semibold italic text-blue-600 hover:text-pink-600"
              >
                Faça login
              </Link>
            </p>
          </div>
          {/* -------------------- */}
        </form>
        {/* -------------------- */}
      </section>
    </main>
  );
}
