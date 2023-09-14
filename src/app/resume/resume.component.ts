import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute } from '@angular/router';


interface User {
  Name : string;
  Details : {
    [key: string] : string;
  };
}


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

userData : User[] = [];
resumeDetails : any;
name:string="";

  constructor(private service:UserserviceService, private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userName = params['name'];
      this.name = userName;
      this.showName(userName);
      console.log( this.resumeDetails);
    })
  }

  showName(name:string){
    this.service.getJSON().subscribe((data)=>{
      this.userData = data;
     const result = this.userData.find((ele)=>ele.Name.toLowerCase() === name);
     this.resumeDetails = result;
    })
  }

}
