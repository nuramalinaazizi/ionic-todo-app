import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  todo: Todo | undefined;
  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.todo = this.todoService.getById(id)
  }
}
