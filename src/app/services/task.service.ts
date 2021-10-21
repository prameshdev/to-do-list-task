import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskListModel } from '../models/task-list';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() {
    this.todoList$.subscribe(this.listChanged.bind(this));
  }

  private readonly LOCAL_STORAGE_KEY = 'todoList';
  private todoArr = this.getLocalStorageList();
  private todoList$ = new BehaviorSubject<TaskListModel[]>(this.todoArr);
  castUser = this.todoList$.asObservable();
  public getToDoList = () => this.todoList$;
  public addItem = (newItem: TaskListModel) => this.todoArr.unshift(newItem) && this.todoList$.next(this.todoArr);
   // store the data from users
  listChanged(): void {
     if (this.todoArr.length) {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.todoArr))
     }
   }
   // get the data from local storage
   getLocalStorageList() {
     let ret = [];
     const localStorageStr =  localStorage.getItem(this.LOCAL_STORAGE_KEY);
     if (localStorageStr) {
      ret = JSON.parse(localStorageStr);
      ret = ret.sort((a: TaskListModel , b: TaskListModel) => a.created > b.created ? -1 : 1 );
     }
     return ret;
   }

}
