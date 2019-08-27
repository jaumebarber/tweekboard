import { Component, OnChanges} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskService } from '../../services/task.service';
import { ColumnService } from '../../services/column.service';
import { Column } from 'src/app/models/column';
import { Task } from './models/task';


@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css'],
})
export class ColumnsComponent implements OnChanges {
    constructor(
      private taskSrv: TaskService,
      private columnSrv: ColumnService
      ) {
        this.getColumns();
      }
    columns: Column[];
    connectedTo = [];
    expanded = false;

    ngOnChanges() {
      console.log(this.columns);
    }

    // create

    add(title: string, id: string): void {
      title = title.trim();
      if (!title) {return; }
      if (id.includes('col')) {
        this.columnSrv.addColumn({ title } as Column)
          .subscribe(column => {
              this.columns.push(column);
          });
      } else if (id.includes('task')) {
        this.taskSrv.addTask({ title } as Task)
        .subscribe(task => {
          this.columns[id].tasks.push(task);
        });
      }
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


    updateColumn(column: Column): void {
      this.columnSrv.updateColumn(column)
      .subscribe();
    }


    delete(task: Task): void {
      this.todo = this.todo.filter(t => t !== task);
      this.taskSrv.deleteTask(task).subscribe();
    }

    collapse(): void {
        this.expanded = !this.expanded;
    }

    getTasks(): void {
       this.taskSrv.getTasks()
           .subscribe(tasks => this.todo = tasks);
    }

    getColumns(): void {
      this.columnSrv.getColumns()
           .subscribe(columns => { this.columns = columns; this.columns.forEach(column => this.connectedTo.push(`col-${column.id}`)); });
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
