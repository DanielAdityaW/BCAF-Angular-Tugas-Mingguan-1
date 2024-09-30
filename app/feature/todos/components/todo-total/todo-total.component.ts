import { Component, Input } from '@angular/core';
import { ITodo } from '../interface/i-todo';
import { TodoService } from '../../../../cores/services/todo.services';

@Component({
  selector: 'app-todo-total',
  templateUrl: './todo-total.component.html',
  styleUrl: './todo-total.component.css'
})
export class TodoTotalComponent {
  @Input()
  forTrash: boolean = false;

  constructor(private todoService: TodoService) {}

  get totalTrash() {
    return this.todoService.getTotalTrash();
  }

  get totalTodo() {
    return this.todoService.getTotalTodos();
  }
}
