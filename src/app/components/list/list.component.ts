import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { List } from '../../models/models';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() board;
  lists: List[];
  listConnections = [];
  expanded = false;

  constructor() {}

  ngOnInit() {
    this.getLists();
    this.getListConnections();
  }

  getLists() {
    this.lists = this.board.lists;
  }

  getListConnections() {
    for (const list of this.lists) {
      this.listConnections.push(`list-${list.id}`);
    }
  }
    // add(text: string): void {
    //   text = text.trim();
    //   if (!text) { return; }
    //   this.cardSrv.addTask({ text } as Card)
    //     .subscribe(card => {
    //       this.cards$.push(card);
    //     });

    //   this.collapse();
    // }


    // read
    // update
    // delete
    // retrieve all data




    // update(card: Card): void {
    //   this.cardSrv.updateCard(card)
    //   .subscribe();
    // }

    // delete(card: Card): void {
    //   this.cards$ = this.cards$.filter(t => t !== card);
    //   this.cardSrv.deleteCard(card).subscribe();
    // }

    collapse(): void {
      this.expanded = !this.expanded;
    }

    drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
