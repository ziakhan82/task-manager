import { Component, Input, output, Output,EventEmitter, input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  

 // @Input() selectedUserName: string = '';  // To receive the selected user name from the parent
  @Input({required: true}) name!: string;
}