import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../Services/data/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  constructor(private route:Router, private data:DataService){}

  ngOnInit(): void {
  
  }

  notes(){
    console.log('notes');
    this.route.navigate(['/home/notes'])
  }
  trash(){
    console.log('trash');
    this.route.navigate(['/home/trash'])
  }
  archive(){
    console.log('archive');
    this.route.navigate(['/home/archive'])
  }

  search(event:any){
    console.log(event.target.value);
    this.data.outgoingData(event.target.value);
  }
}
