import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  // constructor(private http: HttpClient) {
  // }
  // hostName:string=this.apiPathsService.baseUrl;
 /* // hostName:string='localhost';

  public createNote(notes:any):Observable<any>{

    // return this.http.post(this.hostName+"/note/create",notes);

  }

  public findNote(note_id: string): Observable<any> {
    return this.http.get(this.hostName+'/note/' + note_id);
  }

  updateNote(id:number,notes:any):Observable<any>{

    return this.http.put(this.hostName+"/note/edit/"+id,notes);

  }
  public updateSpecialNoteDescription(note_id:number,note:any):Observable<any>{
    console.log(note)
    return this.http.put(this.hostName+"/note/updatebyname/"+note_id,{
      noteDescription:note

    });
  }


  deleteNote(noteId: number):Observable<any> {
    console.log(noteId);
    return this.http.delete(this.hostName+'/note/'+noteId);
  }

  findAll(): Observable<any> {
    return this.http.get(this.hostName + '/note/all-active');
  }

  findList(searchText: string, page: number, size: number):Observable<any> {
    return this.http.get(this.hostName+'/note/data-list?searchText='+searchText+'&page='+page+'&size='+size);
  }*/
}
