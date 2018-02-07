import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component ({
    selector : 'toDoList',
    templateUrl : 'toDoList.html'
})

export class ToDoList {
    constructor(public navCtrl: NavController) {

    }

}