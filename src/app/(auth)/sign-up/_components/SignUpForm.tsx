"use client";

import { useSignUp } from "@clerk/nextjs";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "sonner";
import SignUpVerifyEmailForm from "./SignUpVerifyEmailForm";
import Spinner from "@/components/Spinner";
import { Tooltip } from "@mui/material";
import { IoHome } from "react-icons/io5";

export default function SignUpForm() {
  const { isLoaded, signUp } = useSignUp();
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [messageColorEmail, setMessageColorEmail] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const [messageColorPassword, setMessageColorPassword] = useState("");

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

    if (name === "password") {
      if (value === "") {
        setMessageColorPassword("");
      } else if (!validatePassword(value)) {
        setMessageColorPassword(
          "A senha deve conter no mínimo 8 caracteres. Deve conter uma letra maiúscula e um caractere especial."
        );
        setErrorMessagePassword("");
      } else {
        setMessageColorPassword("Senha Válida");
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

  // lida com a validação da senha
  function validatePassword(password: string) {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    return regex.test(password);
  }
  // -------------------- //

  // lida com a exibição da senha
  function handleShowPassword() {
    setShowPassword(!showPassword);
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

    if (!validatePassword(formData.password)) {
      setErrorMessagePassword(
        "Senha Inválida. A senha deve conter no mínimo 8 caracteres. Deve conter uma letra maiúscula e um caractere especial."
      );

      setMessageColorPassword("");
      return;
    }

    if (!isLoaded) {
      return null;
    }

    setIsLoading(true);

    setTimeout(async () => {
      try {
        await signUp?.create({
          emailAddress: formData.email,
          password: formData.password,
        });

        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });

        setVerifyEmail(true);
      } catch (err) {
        if (isClerkAPIResponseError(err)) {
          return toast.error(err.errors[0]?.message);
        }
        toast.error("Erro ao criar conta");
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  }
  // -------------------- //

  // Verifica se o email foi verificado
  if (verifyEmail) {
    return <SignUpVerifyEmailForm />;
  }
  // -------------------- //

  return (
    <main
      className="min-h-screen w-full flex items-center justify-center 
    bg-gradient-to-r from-blue-300 via-teal-400 to-green-500"
    >
      <section className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {/* image */}
        <div className="flex justify-center mb-4 relative">
          <div className="rounded-full p-1 bg-gradient-to-r from-teal-600 to-pink-600 shadow-xl transition-all duration-500 hover:scale-110 hover:rotate-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse-slow">
            <Image
              src="/sign-up.jpg"
              alt="sign-up"
              width={130}
              height={130}
              className="rounded-full border-2 border-teal-600 shadow-xl transition-all duration-500 hover:scale-110 hover:rotate-2 hover:border-pink-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse-slow"
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
              className="absolute top-[136px] right-[741px] border-2 border-pink-600 bg-black rounded-full p-2 text-white transition duration-300 transform hover:scale-125 hover:bg-white hover:text-black"
            >
              <IoHome className="text-lg cursor-pointer" />
            </Link>
          </Tooltip>
        </div>
        {/* -------------------- */}

        <form onSubmit={handleSubmit}>
          {/* title */}
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            Crie Sua Conta
          </h2>
          {/* -------------------- */}

          {/* input email */}
          <div className="relative mb-10">
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
              className="w-full px-4 py-2 rounded border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 placeholder:italic focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 transform translate-y-full mt-1 w-full">
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

          {/* input password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-md font-semibold italic text-black mb-1"
            >
              Senha
            </label>

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
                className="w-full px-4 py-2 rounded border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 placeholder:italic focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 transition duration-300 transform hover:scale-105"
              />

              {showPassword ? (
                <FaEyeSlash
                  size={24}
                  onClick={handleShowPassword}
                  className="absolute right-3 top-1/2 transition duration-300 transform hover:scale-125 -translate-y-1/2 text-gray-500 cursor-pointer"
                />
              ) : (
                <FaEye
                  size={24}
                  onClick={handleShowPassword}
                  className="absolute right-3 top-1/2 transition duration-300 transform hover:scale-125 -translate-y-1/2 text-gray-500 cursor-pointer"
                />
              )}
            </div>

            <div className="absolute bottom-0 left-0 transform translate-y-full mt-1 w-full">
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

          {/* captcha */}
          <div id="clerk-captcha"></div>
          {/* -------------------- */}

          {/* button submit */}
          <div className="mb-10">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-gradient-to-r from-blue-500 via-teal-600 to-green-700 px-4 py-2 text-lg font-semibold text-white shadow-sm hover:from-blue-700 hover:via-teal-700 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105 gap-4"
            >
              {isLoading ? (
                <>
                  <Spinner /> Criando...
                </>
              ) : (
                "Criar"
              )}
            </button>
          </div>
          {/* -------------------- */}
        </form>

        {/* link faça login */}
        <div>
          <p className="text-center font-semibold italic text-sm text-black">
            Já possui conta?{" "}
            <Link
              href="/login"
              className="text-lg font-semibold italic text-blue-600 hover:text-pink-600"
            >
              Faça login
            </Link>
          </p>
        </div>
        {/* -------------------- */}
      </section>
    </main>
  );
}
