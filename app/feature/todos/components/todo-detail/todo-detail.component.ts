import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../interface/i-todo';
import {
  faCheck,
  faEdit,
  faTimes,
  faTrash,
  faTrashRestore,
} from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../../../../cores/services/todo.services';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css',
})
export class TodoDetailComponent {
  icons = {
    confirm: faCheck,
    edit: faEdit,
    remove: faTrash,
    checklist: faCheck,
    cancle: faTimes,
    restore: faTrashRestore,
  };

  isEdit: boolean = false;
  isConfirmRemove: boolean = false;
  
  @Input() todo!: ITodo;
  @Input() forTrash: boolean = false;

  constructor(private todoService: TodoService) {}

  remove() {
    this.todoService.removeTodo(this.todo.id);
    this.todoService.moveToTrash(this.todo);
  }

  edit() {
    this.isEdit = !this.isEdit;
  }

  getClass(isDone: boolean) {
    if (isDone) {
      return 'font-weight-bold text-decoration-line-through';
    }

    return 'text-secondary';
  }

  restore() {
    this.todoService.restore(this.todo.id);
  }
}
