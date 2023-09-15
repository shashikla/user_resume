import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute } from '@angular/router';


interface User {
  Name : string;
  Details : {
    [key: string] : string;
  };
}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  ];

userData : User[] = [];
resumeDetails : any;
name:string="";

  constructor(private service:UserserviceService, private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userName = params['name'];
      this.name = userName.toUpperCase();
      this.service.getJSON().subscribe((user) =>{
        this.resumeDetails = user.find((ele:any)=>ele.Name.toLowerCase() === userName);
        console.log( this.resumeDetails);
      })
      this.resumeDetails = this.userData.find((ele)=>ele.Name.toLowerCase() === userName);
    })
  }

  // showName(name:string){
  //   this.service.getJSON().subscribe((data)=>{
  //     this.userData = data;
  //    const result = this.userData.find((ele)=>ele.Name.toLowerCase() === name);
  //    this.resumeDetails = result;
  //   })
  // }

}
