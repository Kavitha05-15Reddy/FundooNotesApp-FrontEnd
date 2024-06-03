import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';
import { response } from 'express';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrl: './get-notes.component.scss'
})
export class GetNotesComponent implements OnInit {
  notesArray: any;

  constructor(private notes:NotesService){}

  ngOnInit(): void {
    this.OnNote()
  }

  OnNote(){
    this.notes.getNotes().subscribe((response: any) =>{
      console.log(response);
      this.notesArray = response.data;
      console.log("Stored to array variable");
      console.log(this.notesArray);
      this.notesArray=this.notesArray.filter((object: any) =>{
        return object.trash == false;
      })
      this.notesArray=this.notesArray.filter((object: any) =>{
        return object.archive == false;
      })  
    })
  }

  addRefreshEvent($event:any){
    console.log("Added note refresh");
    this.OnNote();
  }

  updateRefeshEvent($event:any){
    console.log("Updated note refresh");
    this.OnNote();
  }
}
