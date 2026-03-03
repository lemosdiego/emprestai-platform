import { useState } from "react";
import type { SimulacaoRequest, SimulacaoResponse } from "../types/simulacao";
import api from "../services/api/api";

export function useSimulacao() {
  const [simulacao, setSimulacao] = useState<SimulacaoResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function simularEmprestimo(payload: SimulacaoRequest) {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post<SimulacaoResponse>(
        "/simulacoes",
        payload,
      );
      setSimulacao(response.data);
    } catch (err: unknown) {
      setError(
        (err as { response?: { data?: { message?: string } } }).response?.data
          ?.message || "Erro ao simular empréstimo",
      );
    } finally {
      setLoading(false);
    }
  }
  return {
    simulacao,
    loading,
    error,
    simularEmprestimo,
  };
}
