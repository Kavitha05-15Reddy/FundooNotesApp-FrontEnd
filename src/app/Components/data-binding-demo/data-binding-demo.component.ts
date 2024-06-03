import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.scss'
})
export class DataBindingDemoComponent {

  name: string = '';
  email: string = '';
  password: string = '';
  city: string = ''

  sumbitted: boolean = false;

  OnSubmit(){
    this.sumbitted = true;
  }

  userName: any = 'Kavitha';

  Url: string = "https://www.youtube.com/watch?v=ATdf91NWnVg&list=PLp50dWW_m40W6u4NxWCsQk1F8CmzBI6r0&index=26";

  disabled: boolean = false;

  image: string = "assets/image.jpeg";

  className: string = "c1";

  Onclick(){
    console.log("event added")
    this.className = this.className === 'c1' ? 'c2' : 'c1';
    this.disabled = !this.disabled;
  }

  public input: string = '';
}
