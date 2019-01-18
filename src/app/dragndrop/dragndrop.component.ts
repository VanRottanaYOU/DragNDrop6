import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {

  simpleDrop: any = null;

  constructor() { }

  ngOnInit() {
  }

  listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
  
  itemsToDrop=[{'name': "hello"},
   {'name': "bye"},
   {'name' : "Tornado"}
  ];
   
  allowDrop(ev) {
    console.log(ev)
    ev.preventDefault();
  }

  drag(ev) {
    console.log(ev)
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    console.log(ev)
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data)
    ev.target.appendChild(document.getElementById(data));
  }

  onMove(todo: Todo, position: number, sortableIndex,dragEnabled,dragData) {
    console.log(todo);
    console.log(position);
    console.log(sortableIndex);
    console.log(dragEnabled);
    console.log(dragData);
  }

  show(indexdepart){
    console.log("depart");
    console.log(indexdepart);
  }



}
