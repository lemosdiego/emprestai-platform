import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSimulacao } from "../../../hooks/useSimulacao";

export default function Hero() {
  const { simulacao, simularEmprestimo, loading, error } = useSimulacao();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [salarioBruto, setSalarioBruto] = useState<number | null>(null);
  const [salarioBrutoFormatado, setSalarioBrutoFormatado] = useState("");

  function maskMoneyBR(valor: string) {
    const somenteNumeros = valor.replace(/\D/g, "");

    if (!somenteNumeros) {
      return { formatted: "", value: null };
    }

    const numero = Number(somenteNumeros);

    return {
      formatted: numero.toLocaleString("pt-BR"),
      value: numero,
    };
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!nome || !salarioBruto) return;

    simularEmprestimo({
      nome,
      salarioBruto, // 👈 número limpo
    });
  };

  useEffect(() => {
    if (simulacao) {
      navigate("/plans", {
        state: simulacao,
      });
    }
  }, [simulacao, navigate]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[url('https://res.cloudinary.com/dkrpmbjml/image/upload/v1772552420/emprestai_ssrjca.jpg')] bg-cover bg-center bg-fixed bg-no-repeat">
      {/* Overlay com gradiente moderno */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-purple-900/80 to-black/60"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 py-20">
        {/* Conteúdo de Texto */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg leading-tight">
            EmprestAi! <br className="hidden lg:block" />
            <span className="text-purple-200">Crédito Simples.</span> <br />
            Sem enrolação.
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
            A emprestAi conecta você às melhores opções de crédito de forma
            rápida, transparente e 100% digital.
          </p>
        </div>

        {/* Container do Formulário (Glassmorphism) */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="text-center mb-2">
              <p className="text-2xl font-bold text-white">Simule agora</p>
              <p className="text-purple-200 text-sm">
                É rápido, fácil e seguro!
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="nome" className="sr-only">
                  Nome completo
                </label>
                <input
                  id="nome"
                  type="text"
                  placeholder="Nome completo"
                  className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 transition-all outline-none"
                  value={nome}
                  onChange={(e) => {
                    const somenteLetras = e.target.value.replace(
                      /[^a-zA-ZÀ-ÿ\s]/g,
                      "",
                    );
                    setNome(somenteLetras);
                  }}
                />
              </div>

              <div>
                <label htmlFor="salario" className="sr-only">
                  Salário Bruto
                </label>
                <input
                  id="salario"
                  type="text"
                  placeholder="Salário Bruto (R$)"
                  className="w-full px-4 py-3 rounded-xl bg-white/90 border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 transition-all outline-none"
                  value={salarioBrutoFormatado}
                  onChange={(e) => {
                    const { formatted, value } = maskMoneyBR(e.target.value);

                    setSalarioBruto(value);
                    setSalarioBrutoFormatado(formatted);
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl shadow-lg transform transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  Simulando...
                </span>
              ) : (
                "Ver Ofertas"
              )}
            </button>

            {error && (
              <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-center">
                <p className="text-red-200 text-sm font-medium">{error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
