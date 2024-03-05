import { http } from '../http/http.interface';
import { IThemeData } from '../themes/themes.interface';

export interface IResultJSON {
  'Competência 1': {
    Pontuação: number;
    Observação: string;
  };
  'Competência 2': {
    Pontuação: number;
    Observação: string;
  };
  'Competência 3': {
    Pontuação: number;
    Observação: string;
  };
  'Competência 4': {
    Pontuação: number;
    Observação: string;
  };
  'Competência 5': {
    Pontuação: number;
    Observação: string;
  };
  'Erros de Português': number;
  'Erros Graves': [
    {
      'Regra quebrada': string;
      Frase: string;
      'Sugestão de correção': string;
    },
  ];
  'Erros Médios': [
    {
      'Regra quebrada': string;
      Frase: string;
      'Sugestão de correção': string;
    },
  ];
  'Erros Leves': [
    {
      'Regra quebrada': string;
      Frase: string;
      'Sugestão de correção': string;
    },
  ];
  'Margem de Erro de I.A': string;
  'Pontos de Melhorias no Geral': {
    'Pontos no geral': number;
    Observação: string;
  };
  'Casos de Zeramento da Prova': [];
  'Nota Final': number;
}

export interface IResultEssayUserData {
  id: string;
  title: string;
  user_id: string;
  createdAt: Date;
  entity: string;
  essay: string;
  points: number;
  result: IResultJSON;
  Essays: IThemeData;
}

export type IResultEssayUser = http<IResultEssayUserData>;
