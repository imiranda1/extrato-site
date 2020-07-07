import { ItemExtrato } from './item-extrato';
export interface Extrato {
  lancamentos: ItemExtrato[];
  indice: number;
  tamanhoPagina: number;
  totalElementos: number;

}
