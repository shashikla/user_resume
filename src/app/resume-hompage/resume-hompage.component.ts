import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';




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

  constructor(private service:UserserviceService, 
              private router:Router,
              private userService:UserDataService) { }

  userdata: User[] = [];

  ngOnInit(): void {
  }

  showName(name:string){

    this.userService.getAllData().subscribe((data) => {
      this.userdata = data;
     const result = this.userdata.find((ele)=>{

       console.log(ele.Name);
     });
    })

    // this.service.getJSON().subscribe((data)=>{
    //   this.userdata = data;
    //  const result = this.userdata.find((ele)=>ele.Name.toLowerCase() === name);
    // })
  }

  sendData(e:any){
    console.log("name here..", e.name);
    this.userService.getAllData().subscribe((data) => {
      this.userdata = data;
        const result = this.userdata.find((ele)=>{
          if((ele.Name).toLowerCase() === (e.name).toLowerCase()){
          this.router.navigate(['/details',ele.Name]);
          }
          })
     });
    // this.showName(e.name);
    // 
  }

}
