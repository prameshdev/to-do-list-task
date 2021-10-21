import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskService } from '../services/task.service';
import { TaskListModel, TaskStatus } from '../models/task-list';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  
  open : any;

  inprogress = [
    'Get to work',
  ];

  done = [
    'Get to work',
  ];

  constructor(private taskService : TaskService) { }

  ngOnInit() {
    const finallyResults = this.taskService.getLocalStorageList();
    console.log(finallyResults);
    this.open = finallyResults;
  }
  
  // dragDrop method for task list
  dragDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex)
    } 
  }

}
