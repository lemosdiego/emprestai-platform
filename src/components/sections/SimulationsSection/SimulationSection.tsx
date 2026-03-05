// /home/washington/Documentos/professional-jobs/EmprestAi/emprestai-front/src/components/sections/Simulation/SimulationSection.tsx

import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSimulacao } from "../../../hooks/useSimulacao";
import { FaLock, FaBolt, FaCheckCircle } from "react-icons/fa";

export default function SimulationSection() {
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
      salarioBruto,
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
    <section id="simulacao" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Lado Esquerdo: Texto Persuasivo e Benefícios */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              Pronto para realizar seu sonho?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Preencha o formulário ao lado e descubra em segundos o crédito
              ideal para o seu perfil. É gratuito e não afeta seu score.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-700">
                <div className="p-3 bg-green-100 rounded-full text-green-600 mt-1">
                  <FaCheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Análise Instantânea
                  </h4>
                  <p className="text-sm text-gray-600">
                    Receba propostas em tempo real sem filas.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 text-gray-700">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600 mt-1">
                  <FaLock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Segurança Garantida
                  </h4>
                  <p className="text-sm text-gray-600">
                    Seus dados são protegidos com criptografia de ponta.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 text-gray-700">
                <div className="p-3 bg-purple-100 rounded-full text-purple-600 mt-1">
                  <FaBolt size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sem Compromisso</h4>
                  <p className="text-sm text-gray-600">
                    Simule quantas vezes quiser sem custo algum.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Lado Direito: O Formulário */}
          <div className="w-full max-w-md bg-gray-50 border border-gray-200 rounded-2xl shadow-xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="text-center mb-2">
                <p className="text-2xl font-bold text-gray-900">Simule agora</p>
                <p className="text-gray-500 text-sm">
                  Preencha seus dados abaixo
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nome completo
                  </label>
                  <input
                    id="nome"
                    type="text"
                    placeholder="Digite seu nome"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
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
                  <label
                    htmlFor="salario"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Salário Bruto Mensal
                  </label>
                  <input
                    id="salario"
                    type="text"
                    placeholder="R$ 0,00"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
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
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-center">
                  <p className="text-red-600 text-sm font-medium">{error}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
