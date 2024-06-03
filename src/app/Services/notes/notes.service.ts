import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token:any;
  constructor(private httpService: HttpService) {this.token = localStorage.getItem('token')}

  addNotes(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService('https://localhost:7153/api/Notes/CreateNotes', reqData, true, header);
  }

  getNotes(){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:7153/api/Notes/RetrieveAllNotes', true, header);
  }

  trashNotes(reqData:any){
    console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:7153/api/Notes/TrashNotes?notesId='+reqData.notesId,{},true,header);
  }
  
  archiveNotes(reqData:any){
    console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:7153/api/Notes/ArchiveNotes?notesId='+reqData.notesId,{},true,header);
  }

  notesColor(reqData:any){
    console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:7153/api/Notes/ChangeNoteColor?notesId='+reqData.notesId+'&color='+reqData.color,{},true,header);
  }

  updateNotes(reqData:any,notesId:any){
    console.log(reqData,notesId)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:7153/api/Notes/UpdateNotes?notesId='+notesId,reqData,true,header);
  }
}


