import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-pure-task-list',
  templateUrl: './pure-task-list.component.html'
})
export class PureTaskListComponent implements OnInit {
  ngOnInit(): void {
  }
  // same content as before with the task-list.component.ts
}
