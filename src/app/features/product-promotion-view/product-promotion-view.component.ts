import { Component, OnInit } from '@angular/core';
import { ProductPromotionService } from 'src/app/_myServices/product-promotion.service';

@Component({
  selector: 'app-product-promotion-view',
  templateUrl: './product-promotion-view.component.html',
  styleUrls: ['./product-promotion-view.component.css']
})
export class ProductPromotionViewComponent implements OnInit {
  productPromotions:any
  fromDates:any
  toDates:any
   currentDate = new Date().toISOString()
  showPromotion:boolean=false
    year=null
    month=null
    day=null
  constructor(private productPromotionService:ProductPromotionService) { 
    
  }

  ngOnInit(): void {
    this.getActive()
  }


  getActive()
  { 
   this.productPromotionService.getProductPromotionActive().subscribe((response:any)=>{
   
   let data:any=response
     this.productPromotions=data
     
const   currentDate = new Date().toISOString()
const dateParts = currentDate.substr(0, 10).split('-'); 
 this.year = dateParts[0];  
this.month = dateParts[1];  
this.day = dateParts[2];



// data.forEach(element=>{
//   if( element.fromMonth==this.month )
//   {
//     this.showPromotion=true;
//   }
// })


    //  data.forEach(element => {
    //   const [year, month, day] = element.date.split("-").map(component => parseInt(component, 10));

    //  });
   
   })

   
   
  }

}
