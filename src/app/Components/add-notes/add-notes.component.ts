import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrl: './add-notes.component.scss'
})
export class AddNotesComponent implements OnInit {
  notesForm!: FormGroup;
  submitted = false;
  display= true;
  token: any;

  @Output() refreshAddEvent=new EventEmitter<string>();

  constructor(private formBuilder : FormBuilder, private notes : NotesService){}
  
  ngOnInit(): void {
    this.notesForm = this.formBuilder.group({
      title: [''],
      description: ['']
    })
  }

  OnNote(){
    this.submitted = true;
    if (this.notesForm.valid){
      let reqData = {
        title: this.notesForm.value.title,
        description: this.notesForm.value.description
      }
      console.log(reqData);
      this.notes.addNotes(reqData).subscribe((response: any)=>{
        console.log(response);
        this.refreshAddEvent.emit(response);
      });
    }
    this.display=true;
  }
}
