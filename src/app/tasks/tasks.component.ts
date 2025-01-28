import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Task } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";

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
   dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get selectedUserTasks(){
    return this.dummyTasks.filter((task) => task.userId === this.userId);
  }

  constructor() {
    console.log(this.name);
    console.log("Selected user:");
    console.log(this.selectedUserTasks);
  }

  onCompletedTask(id: string) {
    console.log("Completed task: " + id);
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== id);
  }
  onAddTaskStart() {
    this.isAddTaskStart = true;
  }
  onCancelAddTask() {
    this.isAddTaskStart = false;
  }
  onAddTask(newTask: {title: string, summary: string, dueDate: string }) {
    this.dummyTasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId!,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });
    this.isAddTaskStart = false;
  }

}
