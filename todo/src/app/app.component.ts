import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Minhas Tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    this.todos.push(new Todo(1, 'Estudar', false));
    this.todos.push(new Todo(2, 'Estudar mais um cado', false));
    this.todos.push(new Todo(3, 'Trabalhar', false));
  }

  remove(todo: Todo){
    const idx = this.todos.indexOf(todo);
    if(idx !== -1){
      this.todos.splice(idx, 1);
    }

  }

  markAsDone(todo: Todo){
    todo.done = true;
  }

  markAsUndone(todo: Todo){
    todo.done = false;
  }
}
