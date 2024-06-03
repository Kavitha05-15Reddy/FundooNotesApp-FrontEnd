import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import { DataService } from '../../Services/data/data.service';


@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrl: './display-notes.component.scss'
})
export class DisplayNotesComponent implements OnInit{
  @Input() notesList:any;
  @Output() refreshUpdateEvent=new EventEmitter<string>();
  filterNote: any;

  constructor(public dialog : MatDialog , private data:DataService){}

  ngOnInit(): void {
    this.data.incomingData.subscribe((response) => {
      console.log("Search in process", response);
      this.filterNote = response;
    })
  }

  editNoteDialogBox(notes:any){
    const dialogbox = this.dialog.open(UpdateNotesComponent,{
      width: '40%',
      height: 'auto',
      data:notes
    })
    dialogbox.afterClosed().subscribe(result =>{
      console.log(result);
      this.refreshUpdateEvent.emit(result);
    })
  }
}
