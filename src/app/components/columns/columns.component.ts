import { Component, OnInit, AfterContentChecked} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskService } from '../../services/task.service';
import { DataService } from '../../services/data.service';
import { Column } from '../../models/column';
import { Task } from '../../models/task';


@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css'],
})
export class ColumnsComponent implements OnInit {
  data$;
  boards$;
  columns$;
  tasks$;
  connectedTo = [];
  expanded = false;

    constructor(
      private taskSrv: TaskService,
      private dataSrv: DataService
    ) {
    }

    ngOnInit() {
      this.data$ =  this.getData();
    }

    // create
    addColumn(title: string): void {
      title = title.trim();
      if (!title) {return; }

      this.dataSrv.add({ title } as Column)
        .subscribe(column => {
            this.boards$.columns.push(column);
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


    updateColumn(column: Column): void {
      this.dataSrv.update(column)
      .subscribe();
    }


    delete(item: Column | Task ): void {
      this.data = this.data.filter(i => i !== item);
      this.dataSrv.delete(item).subscribe();
    }

    collapse(): void {
        this.expanded = !this.expanded;
    }

    getData(): void {
      this.dataSrv.getData()
           .subscribe(data => {
              this.data$ = data;
              this.boards$ = data.boards;
              this.columns$ = data.boards.columns;
              this.tasks$ = data.boards.columns.tasks;
          });
    }

    populate(dataType): void {
      dataType.forEach(item => {
        const idTypes = {b: 'board', c: 'col', t: 'task' };
        if (item instanceof Column) {
          this.connectedTo.push(`${idTypes.c}-${item.id}`);
          }
        if (item instanceof Task) {
          this.connectedTo.push(`${idTypes.t}-${item.id}`);
        }
      });
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
