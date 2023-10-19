import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';



interface User {
  Name : string;
  Details : {
    [key: string] : string;
  };
}


@Component({
  selector: 'app-resume-hompage',
  templateUrl: './resume-hompage.component.html',
  styleUrls: ['./resume-hompage.component.css']
})
export class ResumeHompageComponent implements OnInit {

  constructor(private service:UserserviceService, private router:Router) { }

  userdata: User[] = [];

  ngOnInit(): void {
  }

  showName(name:string){
    this.service.getJSON().subscribe((data)=>{
      this.userdata = data;
     const result = this.userdata.find((ele)=>ele.Name.toLowerCase() === name);
    })
  }

  sendData(e:any){
    // console.log("name here..", e.name);
    e.name = e.name.toLowerCase();
    this.showName(e.name);
    this.router.navigate(['/details',e.name]);
  }

}
