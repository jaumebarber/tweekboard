
export interface DataModel {
  id: number;
  type: string;
}

export interface Card extends DataModel {
  text?: string;
  type: 'card';
}

export interface List extends DataModel {
  title: string;
  type: 'list';
  cards?: Card[];
}

export interface Board extends DataModel {
  title: string;
  type: 'board';
  lists?: List[];
}
