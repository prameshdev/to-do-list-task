import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskListModel, TaskStatus } from '../models/task-list';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  readonly addEvent = new EventEmitter<TaskListModel>();
  public todoList = new TaskListModel();
  
  taskStatus = TaskStatus;
  enumKeys : any [];

  constructor(private taskService: TaskService) {
    this.enumKeys = Object.keys(this.taskStatus);
   }

  ngOnInit(): void {  
  }
  submitMethod() {
    if (this.todoList.title) {
      this.taskService.addItem(new TaskListModel(this.todoList.title, this.todoList.description, this.todoList.status,this.todoList.created));

      if (this.addEvent) {
        this.addEvent.emit(this.todoList);
      }
      console.log('just results', this.todoList);
      this.todoList.title;
      this.todoList.description;
      this.todoList.status;
      this.todoList.created;
    }
  }
}
