import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  storageInitialized: Boolean = false
  todos: Todo[] = []
  nextId: number = 1
  constructor(private storage: Storage) {
    this.init();
  }

  create(todo: Omit<Todo, 'id'>): Todo {
    const newTodo: Todo = {
      id: this.nextId++,
      ...todo
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  getAll(): Todo[] {
    return [...this.todos];
  }
  
  getById(id:number):Todo|undefined {
    return this.todos.find(val=>val.id === id)
  }

  async init() {
    await this.storage.create();
    this.storageInitialized = true;
  }

  private async loadTodos() {
    const storedTodos = await this.storage.get('todos');
    if (storedTodos) {
      this.todos = storedTodos;
      this.nextId = this.todos.length > 0 ? Math.max(...this.todos.map(t => t.id)) + 1 : 1;
    }
  }

  private async saveTodos() {
    if (this.storageInitialized) {
      await this.storage.set('todos', this.todos);
    }
  }

}
