import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TodoList_Angular';
  todos: Todo[] = [];
  newTodo: string;
  LocalDate: string

  ngOnInit() {
    this.LocalDate = new Date().toLocaleDateString('en-US')
  }

  saveTodo()
  {
    if(this.newTodo)
    {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.IsCompleted = true;
      this.todos.push(todo);
      this.newTodo = ''
    }
  }

  removeTodo(id: number)
  {
    this.todos = this.todos.filter((v, i)=> i != id)
  }
  
  done(id: number)
  {
    this.todos[id].IsCompleted = !this.todos[id].IsCompleted;
  }
}
