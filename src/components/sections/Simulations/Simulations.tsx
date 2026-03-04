import { useLocation } from "react-router-dom";
import type { SimulacaoResponse } from "../../../types/simulacao";

export default function Simulations() {
  const location = useLocation();
  //   const navigate = useNavigate();

  const dados = location.state as SimulacaoResponse | null;
  if (!dados) {
    return (
      <section>
        <p>Nenhuha simulação encontrada</p>
        <a href="/">Voltar</a>
      </section>
    );
  }
  return (
    <section>
      <h2>{dados.nome}</h2>
      <p>Salário líquido: R$ {dados.salarioLiquido.toFixed(2)}</p>
      <p>Faixa: {dados.faixa}</p>
      <p>Limite total: R$ {dados.limiteTotal.toFixed(2)}</p>
      {dados.planos.map((plano) => (
        <div key={plano.meses}>
          <h2>{plano.meses} meses</h2>
          <p>Valor da parcela: R$ {plano.valorParcela.toFixed(2)}</p>
          <p>Percentual do salário: {plano.percentualSalario.toFixed(2)}%</p>
          <p>Juros mensal: {Number(plano.jurosMensal).toFixed(2)}%</p>
        </div>
      ))}
    </section>
  );
}
