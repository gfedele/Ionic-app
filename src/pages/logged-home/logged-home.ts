import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ChatRoom } from './chatRoom/chatRoom';
import { ToDoList } from './ToDoList/toDoList';


@IonicPage()
@Component({
  selector: 'page-logged-home',
  templateUrl: 'logged-home.html',
})
export class LoggedHomePage {
  constructor(public navCtrl: NavController) {
    console.log("we are inside the loggedhome constructor");
    
  }
  goToChat() {
    console.log("we are inside the gotochat method");    
    this.navCtrl.push(ChatRoom);
  }
  goToToDo(){
    console.log("we are inside the gototodo method");   
    this.navCtrl.push(ToDoList);
  }

}
