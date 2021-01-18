import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 

  todos=[{id:1,description:'I Want To Learn Java',status:false,targetDate:new Date()},
  {id:2,description:'I Want To Learn Testing',status:false,targetDate:new Date()},
  {id:3,description:'I Want To Learn Angular',status:false,targetDate:new Date()}
]
  constructor(
   
  ) { }

  ngOnInit(): void {
  }

}
