import { Task } from './task';

export class Column {
  id: number;
  type: 'column';
  title: string;
  tasks?: Task[];
}

