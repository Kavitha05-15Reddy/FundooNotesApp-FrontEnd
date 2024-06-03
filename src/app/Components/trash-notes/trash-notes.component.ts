import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrl: './trash-notes.component.scss'
})
export class TrashNotesComponent implements OnInit{
  trashList: any;

  constructor(private notes : NotesService){}

  ngOnInit(): void {
    this.OnNote()
  }

  OnNote(){
    this.notes.getNotes().subscribe((response: any) =>{
      console.log(response);
      this.trashList = response.data;
      this.trashList=this.trashList.filter((object: any) =>{
        return object.trash == true;
      })
      console.log(this.trashList)
    })
  }

  restore(notes:any){
    let reqData = {
      notesId : notes.notesId
    }
    console.log(reqData);
    this.notes.trashNotes(reqData).subscribe((response: any) =>{
      console.log(response);
    })
  }

}
