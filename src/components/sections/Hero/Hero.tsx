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
    <section className="flex justify-evenly bg-[#f4f4f4] p-14">
      <div className="">
        <h1 className="text-6xl">
          SimulAi <br /> Empréstimos
        </h1>
        <h2 className="mt-2 text-3xl">
          As melhores opções, com as <br /> melhores condições de pagamento
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid gap-3 mt-4 w-[450px] p-7 bg-white rounded-lg shadow"
        >
          <p className="text-xl">Simule seu empréstimo em segundos!</p>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="bg-[#f4f4f4] p-4 outline-none rounded"
          />

          <input
            type="number"
            placeholder="Salário Bruto"
            value={salarioBruto}
            onChange={(e) =>
              setSalarioBruto(
                e.target.value === "" ? "" : Number(e.target.value),
              )
            }
            className="bg-[#f4f4f4] p-4 outline-none rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#9b00cf] p-4 rounded text-white"
          >
            {loading ? "Simulando..." : "Simular Empréstimo"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
      <div className="border w-[700px] rounded">
        <img
          src="https://res.cloudinary.com/dkrpmbjml/image/upload/v1772552420/emprestai_ssrjca.jpg"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
