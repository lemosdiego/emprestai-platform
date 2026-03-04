import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSimulacao } from "../../../hooks/useSimulacao";
import "./Hero.css";

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
    <section className="hero__section">
      <div className="hero-section__overlay">
        <div className="hero-section__container">
          <div className="hero-section__text-container">
            <h1>
              EmprestAi! <br /> Crédito Simples. <br /> Sem enrrolação
            </h1>
            <p>
              A emprestAi conecta você às melhores opções de crédito de forma
              rápida, transparente e 100% digital.
            </p>
          </div>
          <div className="hero-section__form-container">
            <form onSubmit={handleSubmit}>
              <p className="text-xl">Simule seu empréstimo em segundos!</p>

              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => {
                  const somenteLetras = e.target.value.replace(
                    /[^a-zA-ZÀ-ÿ\s]/g,
                    "",
                  );
                  setNome(somenteLetras);
                }}
              />

              <input
                type="text"
                placeholder="Salário Bruto"
                value={salarioBrutoFormatado}
                onChange={(e) => {
                  const { formatted, value } = maskMoneyBR(e.target.value);

                  setSalarioBruto(value);
                  setSalarioBrutoFormatado(formatted);
                }}
              />

              <button type="submit" disabled={loading} className="">
                {loading ? "Simulando..." : "Simular Empréstimo"}
              </button>

              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
