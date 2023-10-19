import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blurry-image',
  templateUrl: './blurry-image.component.html',
  styleUrls: ['./blurry-image.component.css']
})
export class BlurryImageComponent implements OnInit {

  percentageblur :any = 100;

  constructor() { }

  ngOnInit(): void {
   let counter = setInterval(()=>{
      // this.percentageblur = this.percentageblur--;
      console.log(this.percentageblur--);
      if(this.percentageblur < 1){
        clearInterval(counter);
        this.percentageblur = "";
      }
    },60);
  }

}
