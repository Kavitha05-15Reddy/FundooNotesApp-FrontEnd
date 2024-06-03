import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.scss'
})
export class DirectivesDemoComponent {

  list:string = 'items';
  fruits: string[] = ['apple', 'banana', 'orange', 'grapes'];

  showMessage: boolean = false;
  

  onSubmit() {
    this.showMessage = true;
  }

}
