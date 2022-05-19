import { Usuario } from './usuario.model';

export interface HistoricoAcesso {
  id: number;
  dataAcesso: Date;
  usuario: Usuario;
  loginIp: string;
}
