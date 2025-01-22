import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const rand = Math.floor(Math.random()*DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // What we writing here is available in user.comp.html
  // And sing javascript expression we can use properties {{}}
  selectedUser = DUMMY_USERS[rand];

  // Use get keyword 
  get imgPath() {
    return `assets/users/${this.selectedUser.avatar}`;
  }
}
