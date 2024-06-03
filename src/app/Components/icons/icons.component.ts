import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent implements OnInit{
  @Input() notesObject:any;

  constructor(private notes:NotesService){}

  ngOnInit(): void {
    
  }

  OnDelete(){
    let reqData = {
      notesId:this.notesObject.notesId
    }
    console.log(reqData);
    this.notes.trashNotes(reqData).subscribe((response: any) =>{
    console.log("Notes trashed successfully",response);
    })
  }

  OnArchive(){
    let reqData = {
      notesId:this.notesObject.notesId
    }
    console.log(reqData);
    this.notes.archiveNotes(reqData).subscribe((response: any) =>{
    console.log("Notes archive successfully",response);
    })
  }

  colorArray: Array<any> = [
    {code : "#ffffff", name:'White'},
    {code : "#ff6347", name:'Tomato'},
    {code : "#ff4500", name:'OrangeRed'},
    {code : "#ffff00", name:'Yellow'},
    {code : "#adff2f", name:'GreenYellow'},
    {code : "#b0c4de", name:'LightSteelBlue'},
    {code : "#db7093", name:'PaleVioletRed'},
    {code : "#7fffd4", name:'Aquamarine'},
    {code : "#ffe4c4", name:'Bisque'},
    {code : "#c0c0c0", name:'Silver'},
    {code : "#bc8f8f", name:'RosyBrown'},
    {code : "#d3d3d3", name:'LightGrey'},
    {code : "#778899", name:'LightSlateGray'}
  ];

  selectColor(colors:any){
    let reqData = {
      color : colors.name,
      notesId : this.notesObject.notesId
    }
    this.notes.notesColor(reqData).subscribe((response:any) => {
      console.log(response);
    })
  }
}
