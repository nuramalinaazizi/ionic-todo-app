import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  newTodo: Omit<Todo, 'id'> = {
    title: '',
    description: '',
    done: false
  };

  save() {
    this.todoService.create(this.newTodo);
    this.newTodo = { title: '', description: '', done: false };
  }


}
