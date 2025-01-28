import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTask } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  //@Output() cancel = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
  
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  //@Output() add = new EventEmitter<newTask>();

  private taskService = inject(TaskService);

  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
