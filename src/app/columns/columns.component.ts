import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskService } from '../task.service';
import { Task } from '../task';


@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css'],
})
export class ColumnsComponent implements OnInit {
    constructor(private taskservice: TaskService) {}
    todo: Task[];
    doing = [];
    done = [];
  

    
    
    ngOnInit() {
      this.getTasks();
      console.log(this.todo)
    }
    
    getTasks(): void {

       this.taskservice.getTasks()
           .subscribe(tasks => this.todo = tasks)
    }

    delete(task: Task): void {
      this.todo = this.todo.filter(t => t !== task);
      this.taskservice.deleteTask(task).subscribe();
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
