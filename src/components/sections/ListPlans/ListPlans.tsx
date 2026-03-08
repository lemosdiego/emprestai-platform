import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import type {
  SimulacaoResponse,
  SimulacaoRequest,
} from "../../../types/simulacao";

import "./ListPlans.css";
import LimitFilter from "../../ui/LimitFilter/LimitFilter";
import Pagination from "../../ui/Pagination/Pagination";
import { useSimulacao } from "../../../hooks/useSimulacao";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SimulacaoState extends SimulacaoResponse {
  salarioBruto: number;
}

export default function ListPlans() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialDados = location.state as SimulacaoState | null;

  const { simularEmprestimo, simulacao, loading, error } = useSimulacao();

  // Usa os dados da nova simulação se houver, caso contrário usa os dados iniciais
  const dados = simulacao || initialDados;

  const [isFakeLoading, setIsFakeLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFakeLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const isLoading = loading || isFakeLoading;
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(initialDados?.limiteTotal || 0);

  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPlans =
    dados?.planos.slice(indexOfFirstItem, indexOfLastItem) || [];
  const totalPages = dados ? Math.ceil(dados.planos.length / itemsPerPage) : 0;

  const handleCalculate = () => {
    if (initialDados) {
      if (!initialDados.salarioBruto) {
        alert(
          "Dados da simulação incompletos. Por favor, inicie uma nova simulação.",
        );
        navigate("/");
        return;
      }

      setIsFakeLoading(true);
      setTimeout(() => setIsFakeLoading(false), 2000);

      setCurrentPage(1);
      simularEmprestimo({
        nome: initialDados.nome,
        salarioBruto: initialDados.salarioBruto,
        valorDesejado: limit,
      } as unknown as SimulacaoRequest);
    }
  };

  if (!dados && !isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 text-center border-4">
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
    <div className="listPlans__section">
      <div className="listPlans-section__bg">
        {isLoading ? (
          <ListPlansSkeleton />
        ) : (
          <div className="listPlans-section__container">
            {/* Coluna da Esquerda: Perfil e Resumo */}
            <aside className="listPlans-section__aside">
              <div className="listPlans-section-aside__container">
                <div className="mb-6 border-b border-gray-100 pb-6">
                  <p className="text-sm text-gray-500 mb-1">Bem-vindo(a),</p>
                  <h1 className="text-2xl font-bold text-gray-900 break-words">
                    {dados?.nome}
                  </h1>
                  <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Análise Aprovada
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Salário Líquido
                    </p>
                    <p className="text-lg font-medium text-gray-700">
                      {dados?.salarioLiquido?.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>

                  <div>
                    <LimitFilter
                      maxLimit={initialDados?.limiteTotal || 0}
                      currentLimit={limit}
                      onLimitChange={setLimit}
                    />
                    <button
                      onClick={handleCalculate}
                      className="w-full mt-4 py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors shadow-sm"
                    >
                      Calcular
                    </button>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Classificação
                    </p>
                    <p className="text-lg font-bold text-purple-600">
                      {dados?.faixa}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link
                    to="/"
                    className="block w-full text-center text-sm text-gray-500 hover:text-purple-600 font-medium transition-colors"
                  >
                    ← Nova simulação
                  </Link>
                </div>
              </div>
            </aside>

            {/* Coluna da Direita: Lista de Planos */}
            <div className="flex-1 listPlans-section__plans">
              <div className="listPlans-section-plans__text">
                <h2>Ofertas Disponíveis</h2>
                <span>{dados?.planos?.length} opções encontradas</span>
              </div>

              <div className="listPlans-section-plans__cards">
                {error && (
                  <div className="col-span-3 text-center py-4 text-red-600 bg-red-50 rounded-lg border border-red-200">
                    {error}
                  </div>
                )}
                {currentPlans.map((plano) => (
                  <div
                    key={plano.meses}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-purple-200 transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="p-4 flex flex-col h-full">
                      <div className="flex justify-between items-center mb-2">
                        <span className="bg-purple-50 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {plano.meses}x Parcelas
                        </span>
                        <span className="text-[10px] text-gray-400">
                          Juros: {Number(plano.jurosMensal).toFixed(2)}% a.m.
                        </span>
                      </div>

                      <div className="mb-2">
                        <p className="text-xs text-gray-500 mb-0.5">
                          Valor da parcela
                        </p>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-extrabold text-gray-900">
                            {plano.valorParcela.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </span>
                        </div>
                      </div>

                      <div className="mt-auto pt-3 border-t border-gray-50">
                        <div className="flex justify-between items-center text-xs mb-3">
                          <span className="text-gray-500">Total a pagar:</span>
                          <span className="font-medium text-gray-700">
                            {(plano.valorParcela * plano.meses).toLocaleString(
                              "pt-BR",
                              {
                                style: "currency",
                                currency: "BRL",
                              },
                            )}
                          </span>
                        </div>

                        <button className="w-full py-2 px-3 bg-gray-900 hover:bg-purple-600 text-white text-xs font-bold rounded-lg transition-colors shadow-sm">
                          Contratar Empréstimo
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ListPlansSkeleton() {
  return (
    <div className="listPlans-section__container">
      {/* Coluna da Esquerda: Perfil e Resumo Skeleton */}
      <aside className="listPlans-section__aside">
        <div className="listPlans-section-aside__container h-full flex flex-col">
          <div className="mb-6 border-b border-gray-100 pb-6">
            <Skeleton width={100} height={16} className="mb-2" />
            <Skeleton width={200} height={32} />
            <Skeleton
              width={120}
              height={24}
              className="mt-3"
              borderRadius={999}
            />
          </div>

          <div className="space-y-5 flex-1">
            <div>
              <Skeleton width={100} height={14} className="mb-1" />
              <Skeleton width={150} height={28} />
            </div>

            <div>
              <div className="flex justify-between items-end mb-2">
                <Skeleton width={120} height={14} />
                <Skeleton width={100} height={28} />
              </div>
              <Skeleton height={8} className="mb-4" />
              <Skeleton height={40} borderRadius={8} />
            </div>

            <div>
              <Skeleton width={100} height={14} className="mb-1" />
              <Skeleton width={80} height={28} />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <Skeleton width={150} height={20} className="mx-auto block" />
          </div>
        </div>
      </aside>

      {/* Coluna da Direita: Lista de Planos Skeleton */}
      <div className="flex-1 listPlans-section__plans">
        <div className="listPlans-section-plans__text mb-4 rounded-t-2xl border-b-0">
          <Skeleton width={200} height={32} />
          <Skeleton width={150} height={24} />
        </div>

        <div className="listPlans-section-plans__cards">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-2">
                <Skeleton width={80} height={20} borderRadius={999} />
                <Skeleton width={100} height={14} />
              </div>

              <div className="mb-2">
                <Skeleton width={100} height={14} className="mb-1" />
                <Skeleton width={150} height={28} />
              </div>

              <div className="mt-auto pt-3 border-t border-gray-50">
                <div className="flex justify-between items-center mb-3">
                  <Skeleton width={80} height={14} />
                  <Skeleton width={100} height={20} />
                </div>
                <Skeleton height={36} borderRadius={8} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
