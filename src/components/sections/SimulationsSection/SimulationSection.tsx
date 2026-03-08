// /home/washington/Documentos/professional-jobs/EmprestAi/emprestai-front/src/components/sections/Simulation/SimulationSection.tsx

import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSimulacao } from "../../../hooks/useSimulacao";
import "./SimulationSection.css";

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
    if (simulacao && salarioBruto) {
      navigate("/plans", {
        state: { ...simulacao, salarioBruto },
      });
    }
  }, [simulacao, navigate, salarioBruto]);

  return (
    <section id="simulacao" className="simulation__section">
      <div className="simulation-section__container">
        <div className="simulation-section__form-header">
          <h4 className="simulation-section__form-title">
            Simule seu crédito agora
          </h4>

          <p className="simulation-section__form-subtitle">
            Preencha seus dados e descubra em poucos segundos quais são as
            melhores opções de crédito disponíveis para você. A simulação é
            gratuita, rápida e não compromete seu score.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="simulation-section__form">
          <div className="simulation-section__form-group">
            <label htmlFor="nome">Nome completo</label>
            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
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

          <div className="simulation-section__form-group">
            <label htmlFor="salario">Salário Bruto Mensal</label>
            <input
              id="salario"
              type="text"
              placeholder="R$ 0,00"
              value={salarioBrutoFormatado}
              onChange={(e) => {
                const { formatted, value } = maskMoneyBR(e.target.value);
                setSalarioBruto(value);
                setSalarioBrutoFormatado(formatted);
              }}
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                Simulando...
              </span>
            ) : (
              "Ver Ofertas"
            )}
          </button>

          {error && (
            <div className="simulation-section__error">
              <p>{error}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
