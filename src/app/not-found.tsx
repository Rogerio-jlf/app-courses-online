import Link from "next/link";
import { AlertTriangle, Home, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-pulse rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 animate-pulse rounded-full bg-blue-500/20 blur-3xl delay-700"></div>
      </div>

      <Card className="w-full max-w-md transform border border-gray-700 bg-gray-800/50 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto flex h-20 w-20 animate-bounce items-center justify-center rounded-full bg-red-500/10">
            <AlertTriangle className="h-10 w-10 text-red-500" />
          </div>
          <CardTitle className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent">
            Página Não Encontrada
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-8">
          <p className="text-center text-lg leading-relaxed text-gray-300">
            A página que você procura pode ter sido removida, ter seu nome
            alterado ou estar temporariamente indisponível.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              variant="outline"
              className="h-12 flex-1 border-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-800"
            >
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Página Inicial
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-12 flex-1 border-0 bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-purple-800"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <LifeBuoy className="h-4 w-4" />
                Suporte
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
