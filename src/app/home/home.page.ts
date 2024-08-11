import { Component } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private todoService: TodoService) { }

  todos: Todo[] = []
  ngOnInit() {
    this.loadTodos();
  }

  ionViewWillEnter() {
    this.loadTodos();
  }


  loadTodos() {
    this.todos = this.todoService.getAll();
  }

  

  


}
