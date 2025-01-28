import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { Task } from './task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // task = input<Task>();
  @Input() task!: Task;
  @Output() completed = new EventEmitter<string>();
  onCompleted() {
    console.log("Completed task: " + this.task.title);
    this.completed.emit(this.task.id) ;
  }
}
