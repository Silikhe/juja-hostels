import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../modals/Todo'
import {  Observable } from 'rxjs';

// cons = {
//   hearders: new HttpHeaders({
//     'Content-Type':'application/json'
//   })
// }
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string =
   'https://jsonplaceholder.typicode.com/todos';

   todosLimits = '?_limit=10'

//   constructor(private http:HttpClient) { }

//   getTodos():Observable<Todo[]>{
//    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimits}`);
//   }

//   deleteTodo(todo:Todo):Observable<Todo>{
//     const url = `${this.todosUrl}/${todo.id}`
//     return this.http.delete<Todo>(url)
//   }

//   toggleCompleted(todo: Todo):Observable<any>{
//     const url = `${this.todosUrl}/${todo.id}`
//     return this.http.put(url, todo);
//   }


//   addTodo(todo:Todo):Observable<Todo>{
//     return this.http.post<Todo>(this.todosUrl, todo)
//   }
// }
