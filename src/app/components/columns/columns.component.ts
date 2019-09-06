import { Component, OnInit, AfterContentChecked} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskService } from '../../services/task.service';
import { ColumnService } from 'src/app/services/column.service';
import { Task } from '../../models/task';
import { Column } from '../../models/column';


@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css'],
})
export class ColumnsComponent implements OnInit {
    constructor(
      private taskSrv: TaskService,
      private columnSrv: ColumnService
    ) {}
    tasks$: Task[];
    columns$: Column[];
    done = [];
    hasTitle = false;
    defaultValue = 'ToDo';
    columnTitle = '' || this.defaultValue;
    expanded = false;

    ngOnInit() {
      this.getColumns();
    }

    add(text: string): void {
      text = text.trim();
      if (!text) { return; }
      this.taskSrv.addTask({ text } as Task)
        .subscribe(task => {
          this.tasks$.push(task);
        });

      this.collapse();
    }


    // read
    // update
    // delete
    // retrieve all data




    update(task: Task): void {
      this.taskSrv.updateTask(task)
      .subscribe();
    }

    delete(task: Task): void {
      this.tasks$ = this.tasks$.filter(t => t !== task);
      this.taskSrv.deleteTask(task).subscribe();
    }

    collapse(): void {
        this.expanded = !this.expanded;
    }


    getTasks(): void {
       this.taskSrv.getTasks()
           .subscribe(tasks => this.tasks$ = tasks);
    }

    getColumns(): void {
      this.columnSrv.getColumns()
          .subscribe(columns =>  this.columns$ = columns);
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
