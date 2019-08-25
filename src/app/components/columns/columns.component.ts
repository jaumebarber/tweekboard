import { Component, OnInit} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';


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
    hasTitle = false;
    defaultValue = 'ToDo';
    columnTitle = '' || this.defaultValue;
    expanded = false;

    ngOnInit() {
      this.getTasks();
    }

    add(text: string): void {
      text = text.trim();
      if (!text) { return; }
      this.taskservice.addTask({ text } as Task)
        .subscribe(task => {
          this.todo.push(task);
        });
      this.expand();
    }

    update(task: Task): void {
      this.taskservice.updateTask(task)
      .subscribe();
    }

    delete(task: Task): void {
      this.todo = this.todo.filter(t => t !== task);
      this.taskservice.deleteTask(task).subscribe();
    }

    expand(): void {
        this.expanded = !this.expanded;
    }

    saveColumnTitle(title: string): void {
      if (this.columnTitle) {
        this.hasTitle = !this.hasTitle;
      }
      this.columnTitle = title;
    }

    getTasks(): void {
       this.taskservice.getTasks()
           .subscribe(tasks => this.todo = tasks);
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
