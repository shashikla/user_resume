import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';



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
              private userService:UserDataService,
              private snackBar:MatSnackBar) { }

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

  showSnackbarTopPosition(content:any, action:any, duration:any) {
    let sb = this.snackBar.open(content, action, {
      duration: duration,
      panelClass: ["custom-style"]
    });
    sb.onAction().subscribe(() => {
      sb.dismiss();
    });
  }

  sendData(e:any){
    console.log("name here..", e.name);
    this.userService.getAllData().subscribe((data) => {
      this.userdata = data;
        const result = this.userdata.find((ele)=>{
          if((ele.Name).toLowerCase() === (e.name).toLowerCase()){
          this.router.navigate(['/details',ele.Name]);
          }
          else{
            this.showSnackbarTopPosition('User Not Found','Done','1000');
          }
          })
     });
    // this.showName(e.name);
    // 
  }

}
