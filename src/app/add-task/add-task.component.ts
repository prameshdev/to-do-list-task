import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskListModel, TaskStatus } from '../models/task-list';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output()
  readonly addEvent = new EventEmitter<TaskListModel>();
  public todoList = new TaskListModel();
  public mtaskDeatisl: any;
  taskStatus1 = null;
  taskStatus = TaskStatus;
  enumKeys : any [];

  constructor(private taskService: TaskService) {
    this.enumKeys = Object.keys(this.taskStatus).filter(f => !isNaN(Number(f)));
   }

  ngOnInit(): void {  
  }
  submitMethod() {
    if (this.todoList.title) {
      this.taskService.addItem(new TaskListModel(this.todoList.title, this.todoList.description, this.todoList.status));

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
