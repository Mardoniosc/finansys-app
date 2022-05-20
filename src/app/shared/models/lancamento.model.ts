import { Categoria } from './categoria.model';

export class Lancamento {
  constructor(
    public id?: number,
    public data_lancamento?: string,
    public descricao?: string,
    public nome?: string,
    public pago?: boolean,
    public tipo?: string,
    public valor?: string,
    public categoria?: Categoria
  ) {}
}
