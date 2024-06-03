import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrl: './update-notes.component.scss'
})
export class UpdateNotesComponent implements OnInit {
  title: any;
  description: any;
  id: any;
  color: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
    public dialogbox:MatDialogRef<UpdateNotesComponent>,
    private notes: NotesService){
      this.title = data.title,
      this.description = data.description,
      this.id = data.notesId,
      this.color = data.color
  }

  ngOnInit(): void {
    
  }

  closeDialogBox(){
    let reqData = {
      title: this.title,
      description: this.description,
      color : this.color
    }
    this.notes.updateNotes(reqData,this.id).subscribe((response: any) =>{
      console.log(response);
      this.dialogbox.close();
    })
  }

}
