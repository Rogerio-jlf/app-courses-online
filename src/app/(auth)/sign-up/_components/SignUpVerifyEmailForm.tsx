import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { toast } from "sonner";
import Spinner from "@/components/Spinner";
import "@/styles/globals.css";
import { Tooltip } from "@mui/material";
import { IoHome } from "react-icons/io5";

export default function SignUpVerifyEmailForm() {
  const router = useRouter();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [code, setCode] = useState("");
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [isLoadingResend, setIsLoadingResend] = useState(false);

  // lida com a verificação do email
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isLoaded) {
      return null;
    }

    setIsLoadingSubmit(true);

    setTimeout(async () => {
      try {
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code,
        });

        if (completeSignUp.status === "complete") {
          if (setActive) {
            await setActive({ session: completeSignUp.createdSessionId });
            router.push("/home");
          }
        }
      } catch (err) {
        if (isClerkAPIResponseError(err)) {
          const errorMessage = err.errors[0]?.message;

          if (errorMessage.includes("incorrect")) {
            toast.error("❌ Código incorreto! Tente novamente!", {
              className: "toast-error",
              position: "top-center",
              duration: 5000,
            });
          } else if (errorMessage.includes("expired")) {
            toast("⚠️ Código expirado. Solicite um novo!", {
              className: "toast-warning",
              position: "top-center",
              duration: 5000,
            });
          } else {
            toast.error(errorMessage);
          }
        } else {
          toast.error("Erro ao verificar email");
        }
      } finally {
        setIsLoadingSubmit(false);
      }
    }, 2000);
  }
  // -------------------- //

  // lida com o reenvio do código
  async function handleResendCode() {
    setIsLoadingResend(true);

    setTimeout(async () => {
      try {
        if (signUp) {
          await signUp.prepareEmailAddressVerification({
            strategy: "email_code",
          });
        }

        setCode("");

        toast.success("✅ Código reenviado com sucesso!", {
          className: "toast-success",
          position: "top-center",
          duration: 3000,
        });
      } catch (err) {
        if (isClerkAPIResponseError(err)) {
          return toast.error(err.errors[0]?.message);
        }

        toast.error("Erro ao reenviar código");
      } finally {
        setIsLoadingResend(false);
      }
    }, 2000);
  }
  // -------------------- //

  return (
    <main
      className="min-h-screen w-full flex items-center justify-center 
    bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500"
    >
      <section className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {/* image */}
        <div className="flex justify-center mb-4 relative">
          <div className="rounded-full p-1 bg-gradient-to-r from-teal-600 to-pink-600 shadow-xl transition-all duration-500 hover:scale-110 hover:rotate-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse-slow">
            <Image
              src="/reset-verify-email.jpg"
              alt="reset-verify-email"
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
              className="absolute top-[164px] right-[741px] border-2 border-pink-600 bg-black rounded-full p-2 text-white transition duration-300 transform hover:scale-125 hover:bg-white hover:text-black"
            >
              <IoHome className="text-lg cursor-pointer" />
            </Link>
          </Tooltip>
        </div>
        {/* -------------------- */}

        <form onSubmit={handleSubmit}>
          {/* title */}
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            Verificação de Código
          </h2>
          {/* -------------------- */}

          {/* input code */}
          <div className="relative mb-16">
            <label
              htmlFor="code"
              className="block text-md font-semibold italic text-black mb-1"
            >
              Código
            </label>

            <input
              id="code"
              name="code"
              type="text"
              required
              placeholder="Digite o código enviado para o seu email..."
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-2 rounded border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 placeholder:italic focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 transform hover:scale-105"
            />
          </div>
          {/* -------------------- */}

          {/* button submit */}
          <div className="relative mb-2">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md
              bg-gradient-to-r from-yellow-500 via-pink-600 to-red-700
              px-4 py-2 text-lg font-semibold text-white shadow-sm hover:from-purple-700 hover:via-pink-700 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105 gap-4"
            >
              {isLoadingSubmit ? (
                <>
                  <Spinner /> Verificando...
                </>
              ) : (
                "Verificar Código"
              )}
            </button>
          </div>
          {/* -------------------- */}

          {/* button resend code */}
          <div className="relative mb-10">
            <button
              type="button"
              onClick={handleResendCode}
              className="flex w-full justify-center rounded-md bg-gray-700 px-4 py-2 text-lg font-semibold text-white shadow-sm hover:from-gray-700 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 transform hover:scale-105 gap-4"
            >
              {isLoadingResend ? (
                <>
                  <Spinner /> Reenviando...
                </>
              ) : (
                "Reenviar Código"
              )}
            </button>
          </div>
          {/* -------------------- */}

          {/* link faça login */}
          <div>
            <p className="text-center text-sm font-semibold italic text-black">
              Lembrou sua senha?{" "}
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
      </section>
    </main>
  );
}
