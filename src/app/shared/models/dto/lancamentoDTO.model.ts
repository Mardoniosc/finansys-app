export interface LancamentoDTO {
  id: number;
  data_lancamento: string;
  descricao: string;
  nome: string;
  pago: boolean;
  tipo: string;
  valor: string;
  categoria_id: number;
}
