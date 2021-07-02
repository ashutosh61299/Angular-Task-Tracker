import { Component, OnInit,Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {Task} from '../../Task'
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() id:any;
  showAddTask:boolean=false;
  tasks:Task[]=[]
  subscription:Subscription;

  constructor(private taskService:TaskService, private uiService:UiService) {
    this.subscription=this.uiService.onToggle().subscribe((value)=>this.showAddTask=value)
   }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks=tasks
    });
  }

  onTaskDelete(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks=this.tasks.filter(t=>t.id !== task.id)
    })
  }

  toggleReminder(task:Task){
    task.reminder=!task.reminder;
   // console.log(task.reminder)
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task:Task){
    console.log(task)
    this.taskService.addTask(task).subscribe((task)=>this.tasks.push(task))
  }

}
