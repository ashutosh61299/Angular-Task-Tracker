import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task;
  @Output() delete:EventEmitter<Task>=new EventEmitter()
  @Output() toggle:EventEmitter<Task>=new EventEmitter()
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task){
    this.delete.emit(task)
  }
  onToggle(task:Task){
    this.toggle.emit(task)
  }

}
