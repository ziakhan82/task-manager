import { Component,Output,Input, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-user',
  standalone:true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   @Input({required:true}) id!:string; // User ID passed from the parent component
   @Input({required:true}) avater!: string; // User avatar image path passed from the parent component
   @Input({required: true}) name!:string; // User name passed from the parent component
  @Output() select = new EventEmitter<String>(); 

  // select = output<string>();

    get imagePath(){
    return 'assets/users/' + this.avater;
  }
  

 onSelectUser(){
  //This line emits the id of the user to the parent component. 
  // The event will contain the id value, which can be captured by the parent component.
   this.select.emit(this.id);

 }
}
