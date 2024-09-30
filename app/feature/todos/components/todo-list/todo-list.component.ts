import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../interface/i-todo';
import { TodoService } from '../../../../cores/services/todo.services';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todos:ITodo[] = [];
  @Input() forTrash:boolean = false;
  @Output() eventEmitter: EventEmitter<ITodo[]> = new EventEmitter();

  constructor(public todoService: TodoService) {}

  getTodos(): ITodo[] {
    if (this.forTrash) {
      return this.todoService.getTrashTodos();
    }

    return this.todoService.getTodos();
  }
}
