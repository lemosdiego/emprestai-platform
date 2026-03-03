import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSimulacao } from "../../../hooks/useSimulacao";

export default function Hero() {
  const { simulacao, simularEmprestimo, loading, error } = useSimulacao();
  const navigate = useNavigate();

  const [nome, setNome] = useState<string>("");
  const [salarioBruto, setSalarioBruto] = useState<number | "">("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!nome || !salarioBruto) return;

    simularEmprestimo({
      nome,
      salarioBruto: Number(salarioBruto),
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
    <section>
      <h1>Bem-vindo ao SimulAi</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="number"
          placeholder="Salário Bruto"
          value={salarioBruto}
          onChange={(e) =>
            setSalarioBruto(e.target.value === "" ? "" : Number(e.target.value))
          }
        />

        <button type="submit" disabled={loading}>
          {loading ? "Simulando..." : "Simular Empréstimo"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </section>
  );
}
