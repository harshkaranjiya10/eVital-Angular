import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponents } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users'
import { TaskComponent } from './tasks/task/task.component';
// import { TaskComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponents, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent {
  users = DUMMY_USERS
  selectedUserId?: string;

  get selectedUser() {
    console.log(this.users.find( (user) => user.id === this.selectedUserId)!);
    
    return this.users.find( (user) => user.id === this.selectedUserId)!;
  }
  onSelectUser(id: string) {
    console.log(id); 
    this.selectedUserId =id;
  }
}
