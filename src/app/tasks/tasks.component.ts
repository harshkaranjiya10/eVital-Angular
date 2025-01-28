import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { newTask, Task } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name?: string;
  @Input() userId?: string;
  isAddTaskStart: boolean = false;
  //name = input<string>();
  //userId = input<string>();
   
  constructor(private taskService: TaskService) { }

  get selectedUserTasks(){
    return this.taskService.getUserTask(this.userId!)
  }

  /* constructor() {
    console.log(this.name);
    console.log("Selected user:");
    console.log(this.selectedUserTasks);
  } */

  onCompletedTask(id: string) {
    console.log("Completed task: " + id);
    
  }
  onAddTaskStart() {
    this.isAddTaskStart = true;
  }
  onCancelAddTask() {
    this.isAddTaskStart = false;
  }
  // onAddTask(newTask: newTask) {
    
  //   this.isAddTaskStart = false;
  // }

}
