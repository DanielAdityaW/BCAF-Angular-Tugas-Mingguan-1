import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../interface/i-todo';
import { faAdd, faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../../../../cores/services/todo.services';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  @Output() eventEmitter: EventEmitter<ITodo> = new EventEmitter();
  @Output()
  onSearch: EventEmitter<string> = new EventEmitter();

  constructor(private todoService: TodoService) {}
  
  icons = {
    add:faAdd,
    search: faSearch,
  };

  todo : ITodo = {
    id: 0,
    isDone: false,
    task: '',
  };

  add(){
    this.todoService.addTodo(this.todo);
  }

  search(){
    this.todoService.searchTodo(this.todo.task);
  }
}
