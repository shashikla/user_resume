import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
// import { data } from '../assets/json/user.json'

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  getJSON(): Observable<any> {
    return this.http.get("../assets/json/user.json");
  }

  // userByName(name:any){
  //   return this.http.get("../assets/json/user.json").pipe(
  //     map((users)=>{
  //       const user = users.find((user) => user.Name === name);
  //       return user || null;
  //     })
  //   )
  // }
}
