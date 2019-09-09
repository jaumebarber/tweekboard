import { Component, AfterContentChecked, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { List } from '../../models/list';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements AfterContentChecked {
  @Input() board;
  lists: List[];
  expanded = false;

  constructor() {}
  ngAfterContentChecked() {
    this.getLists();
  }

  getLists() {
    this.lists = this.board.lists;
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
