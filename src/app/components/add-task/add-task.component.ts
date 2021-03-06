import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text:string;
  day:string;
  reminder:boolean=false;
  @Output() onAddTask:EventEmitter<Task>=new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('Please specify text!')
      return;
    }

    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    //todo---emit
    this.onAddTask.emit(newTask)

    this.text='';
    this.day='';
    this.reminder=false;

  }

}
 