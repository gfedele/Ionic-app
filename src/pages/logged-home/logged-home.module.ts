import { NgModule } from '@angular/core';
import { IonicPageModule, NavController} from 'ionic-angular';
import { LoggedHomePage } from './logged-home';
import { ChatRoom } from './chatRoom/chatRoom';
import { ToDoList } from './ToDoList/toDoList';

@NgModule({
  declarations: [
    LoggedHomePage,
  ],
  imports: [
    IonicPageModule.forChild(LoggedHomePage),
  ],
})
export class LoggedHomePageModule {
  constructor(public navCtrl: NavController) {
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
