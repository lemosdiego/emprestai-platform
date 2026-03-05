import { useLocation, Link } from "react-router-dom";
import type { SimulacaoResponse } from "../../../types/simulacao";

export default function Simulations() {
  const location = useLocation();

  const dados = location.state as SimulacaoResponse | null;

  if (!dados) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Nenhuma simulação encontrada
          </h2>
          <p className="text-gray-600 mb-6">
            Por favor, preencha o formulário na página inicial para ver suas
            opções.
          </p>
          <Link
            to="/"
            className="inline-block w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors"
          >
            Voltar para o Início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho do Dashboard */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Olá, <span className="text-purple-600">{dados.nome}</span>!
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Encontramos as melhores ofertas de crédito para você.
          </p>
        </div>

        {/* Resumo Financeiro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Salário Líquido
            </p>
            <p className="text-2xl font-bold text-gray-800 mt-1">
              {dados.salarioLiquido.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Limite Disponível
            </p>
            <p className="text-2xl font-bold text-green-600 mt-1">
              {dados.limiteTotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Faixa de Crédito
            </p>
            <p className="text-2xl font-bold text-purple-600 mt-1">
              {dados.faixa}
            </p>
          </div>
        </div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dados.planos.map((plano) => (
            <div
              key={plano.meses}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="p-6 bg-purple-50 text-center">
                <h2 className="text-2xl font-bold text-purple-800">
                  {plano.meses}x Parcelas
                </h2>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-center mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {plano.valorParcela.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                  <span className="text-gray-500">/mês</span>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 mb-6 flex-1">
                  <li className="flex justify-between">
                    <span>Juros mensal:</span>
                    <span className="font-semibold text-gray-800">
                      {Number(plano.jurosMensal).toFixed(2)}%
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Comprometimento da renda:</span>
                    <span
                      className={`font-semibold ${
                        plano.percentualSalario > 30
                          ? "text-orange-500"
                          : "text-green-600"
                      }`}
                    >
                      {plano.percentualSalario.toFixed(2)}%
                    </span>
                  </li>
                </ul>
                <button className="w-full mt-auto py-3 px-4 bg-gray-800 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors">
                  Contratar Agora
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
          >
            ← Fazer nova simulação
          </Link>
        </div>
      </div>
    </main>
  );
}
