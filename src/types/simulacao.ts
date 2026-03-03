export interface SimulacaoRequest {
  nome: string;
  salarioBruto: number;
}
export interface SimulacaoResponse {
  nome: string;
  salarioLiquido: number;
  faixa: string;
  limiteTotal: number;
  planos: Plano[];
}
export interface Plano {
  meses: number;
  valorParcela: number;
  percentualSalario: number;
  jurosMensal: number;
}
