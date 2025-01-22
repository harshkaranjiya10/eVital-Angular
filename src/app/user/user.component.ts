import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const rand = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
/* export class UserComponent {
  // What we writing here is available in user.comp.html
  // And sing javascript expression we can use properties {{}}

  // -----------------
  // Method 1
  // Relying on Zone.js & Angular's change
  // Supported since Angular 2
  // Checks every component and updates the relevent component.
  selectedUser = DUMMY_USERS[rand];

  // Use get keyword
  get imgPath() {
    return `assets/users/${this.selectedUser.avatar}`;
  }
  onSelectUser() {
    const rand = Math.floor(Math.random() * DUMMY_USERS.length);
    console.log('cloclk');
    this.selectedUser = DUMMY_USERS[rand];
  }
} */


 // Method 2 
export class UserComponent{
       //---------------- 
       
       // Signal: Angular 16
       
       // Signal is an object which contians any value
       
       // Any value changes, only update that part of UI.--
       //    [Any Value]
       //        |
       //  ----------------
       //  ^      ^       ^
       //  |      |       | 
       // App    User   Signal
      
      // Signals not checks every components, just check the updated component and update that. 
    selectedUser = signal(DUMMY_USERS[rand]);

    imgPath= computed( () => `assets/users/${this.selectedUser().avatar}`);
    onSelectUser() {
      const rand = Math.floor(Math.random() * DUMMY_USERS.length);
      //console.log('cloclk');
      this.selectedUser.set(DUMMY_USERS[rand]);
    }
}  
