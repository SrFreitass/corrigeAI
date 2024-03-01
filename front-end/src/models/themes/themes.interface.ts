import { http } from '../http/http.interface';

export interface IThemeData {
  id: string;
  essay_img: string;
  title: string;
  texts: string[];
  figures: string[];
  year: 2023;
  entity: string;
  createdAt: string;
}

export type ITheme = http<IThemeData>;
