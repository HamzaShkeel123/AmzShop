import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/_myServices/cart.service';
import { DeliveryDetailsService } from 'src/app/_myServices/delivery-details.service';
import { SharedService } from 'src/app/_myServices/shared.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  carts:any[]=[]
  userId:number
  deliveryDetails:any
  cId:number
  constructor(private cartService:CartService,
    private router:Router,
    private deliveryDetailService:DeliveryDetailsService
    ) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userId = parseInt(userId, 10);//converting back to int from string
    }




    this.getCartByUserId()
  }

  getCartByUserId()
 { 
  

  // this.deliveryDetailService.getOrders().subscribe((response:any)=>{
  
  //  let data1:any=response
  //   this.deliveryDetails=data1
  // })

  
  this.cartService.getCartByUserId(this.userId).subscribe((response:any)=>{
    let data:any=response
    debugger
    data.forEach(element => {
      if(element.isSold==0)
      {
        debugger
        this.carts.push(element)
  
      }
    });
   


    // let dd:any=this.deliveryDetails

    
  
    // data.forEach(item => {
    //   debugger
    //   this.deliveryDetails.forEach(item2 => {
    //     if(item.userId!=item2.userId && item.productId!=item2.productId)
    //     {
    //       debugger
    //       this.carts.push(item)
    //       // console.log(this.carts)
    //     }
    //   });
     
     
    // });
  

  })
 }
 deliveryDetail(productId:number,cId:number)
 {
  
  let path = '/delivery-details/';
  debugger
  this.router.navigate([path])
  localStorage.setItem('productId', productId.toString());
 var myBundleId=0
  localStorage.setItem('bundleId', myBundleId.toString());

  localStorage.setItem('cId', cId.toString());


 }
}
