import { Card } from './card';

export interface List {
  id: number;
  text: string;
  cards?: Card[];
}
