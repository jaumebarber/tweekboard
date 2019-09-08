import { Component, AfterContentInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DataService } from '../../services/data.service';
import { Column } from '../../models/column';



@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css'],
})
export class ColumnsComponent implements AfterContentInit {
    constructor(
      private dataSrv: DataService
    ) {}
    @Input() board;
    columns: Column[];
    expanded = false;

    ngAfterContentInit() {
      this.getColumns();
    }

    getColumns() {
      this.columns = this.board.columns;
    }

    // add(text: string): void {
    //   text = text.trim();
    //   if (!text) { return; }
    //   this.taskSrv.addTask({ text } as Task)
    //     .subscribe(task => {
    //       this.tasks$.push(task);
    //     });

    //   this.collapse();
    // }


    // read
    // update
    // delete
    // retrieve all data




    // update(task: Task): void {
    //   this.taskSrv.updateTask(task)
    //   .subscribe();
    // }

    // delete(task: Task): void {
    //   this.tasks$ = this.tasks$.filter(t => t !== task);
    //   this.taskSrv.deleteTask(task).subscribe();
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
