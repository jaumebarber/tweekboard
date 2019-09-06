import { Task } from './task';

export interface Column {
  id: number;
  text: string;
  tasks?: Task[];
}
