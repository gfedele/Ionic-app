import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoggedHomePage } from  '../pages/logged-home/logged-home';
import { ChatRoom } from '../pages/logged-home/chatRoom/chatRoom';
import { ToDoList } from '../pages/logged-home/ToDoList/toDoList';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoggedHomePage,
    ChatRoom,
    ToDoList
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoggedHomePage,
    ChatRoom,
    ToDoList
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
