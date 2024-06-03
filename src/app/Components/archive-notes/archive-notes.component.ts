import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrl: './archive-notes.component.scss'
})
export class ArchiveNotesComponent implements OnInit{
  archiveList: any;

  constructor(private notes : NotesService){}

  ngOnInit(): void {
    this.OnNote()
  }

  OnNote(){
    this.notes.getNotes().subscribe((response: any) =>{
      console.log(response);
      this.archiveList = response.data;
      this.archiveList=this.archiveList.filter((object: any) =>{
        return object.archive == true && object.trash == false;
      })
      console.log(this.archiveList)
    })
  }

}
