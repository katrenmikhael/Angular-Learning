import { KeyValue } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, Self } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {
  imgSrc!:string;
  caption!:string;
  self = this;
  imgElements!:Element[];
  displayDetails(event:any,imageTagIndex:any) {
    this.determineCaption(imageTagIndex);
    this.getImageSource(imageTagIndex);
    $("body").css({overflow:"hidden"});
    $(".dark-layer").css({display:"block"});
    $(document).on('keyup', function(e:any) {


    if (e.key == "Escape") {
      $(".dark-layer").css({display:"none"});
      $("body").css({overflow:"auto"});
    };
    });
    $(".dark-layer").click((e:any)=>{
      $(".dark-layer").css({display:"none"});
      $("body").css({overflow:"auto"});
      $(".work-container").click((e:any)=>{
        e.stopPropagation();
      })
    })
  }

  closeDetails()
  {
      $(".dark-layer").css({display:"none"});
      $("body").css({overflow:"auto"});
  }

  determineCaption(imgNumber:number)
  {
    if(imgNumber == 1)
    {
      this.caption = "LOG CABIN"
    }
    else if(imgNumber == 2)
    {
      this.caption = "TASTY CAKE";
    }
    else if(imgNumber == 3)
    {
      this.caption = "CIRCUS TENT";
    }
    else if(imgNumber == 4)
    {
      this.caption = "CONTROLLER";
    }
    else if(imgNumber == 5)
    {
      this.caption = "LOCKED SAFE";
    }
    else{
      this.caption = "SUBMARINE";
    }
  }

  getImageSource(imageTagIndex:any){
    Array.from(document.querySelectorAll(".image img")).forEach(function(item,index) {
      if(imageTagIndex-1 == index)
      {
        imageTagIndex=item.getAttribute('src');

       }
      console.log(index)
    });
    this.imgSrc = imageTagIndex;
  }


}


