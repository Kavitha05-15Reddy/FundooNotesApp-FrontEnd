import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling-demo',
  templateUrl: './event-handling-demo.component.html',
  styleUrl: './event-handling-demo.component.scss'
})
export class EventHandlingDemoComponent {
  showalert(){
    alert("Are you sure do you want to save this ?")
  }
}
