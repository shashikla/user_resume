import { Component } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { Router } from '@angular/router';



interface User {
  Name : string;
  Details : {
    [key: string] : string;
  };
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service:UserserviceService, private router:Router){}

  title = 'projectbulk';
  userdata: User[] = [];

  show_Msg : any ;
  counter = 0;
  data = [
    'This is some awesome thinking!',
    'What terrific math skills you’re showing!',
    'You are an amazing writer!',
    'Wow! You have improved so much!',
    "You are showing excellent understanding!",
    "This is clear, concise, and complete!"
   ];
   
   ngOnInit(){
    //  this.showMsg();
     this.service.getJSON().subscribe((data)=>{
       this.userdata = data;
      const result = this.userdata.find((ele)=>ele.Name === "Shashikla Waghmare");
      // console.log(result);
      
     })
    }

    showMsg(){
      this.show_Msg = this.data[0];
        this.show_Msg = this.data[this.counter++];
        this.counter = (this.counter) % this.data.length;
    }

    showName(name:string){
      this.service.getJSON().subscribe((data)=>{
        this.userdata = data;
       const result = this.userdata.find((ele)=>ele.Name.toLowerCase() === name);
       console.log(result);
      })
    }

    sendData(e:any){
      console.log("name here..", e.name);
      e.name = e.name.toLowerCase();
      this.showName(e.name);
      this.router.navigate(['/details',e.name]);
    }
}
