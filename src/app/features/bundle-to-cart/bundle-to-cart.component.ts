import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BundleDetailService } from 'src/app/_myServices/bundle-detail.service';
import { BundleService } from 'src/app/_myServices/bundle.service';
import { CartService } from 'src/app/_myServices/cart.service';


@Component({
  selector: 'app-bundle-to-cart',
  templateUrl: './bundle-to-cart.component.html',
  styleUrls: ['./bundle-to-cart.component.css']
})
export class BundleToCartComponent implements OnInit {

  bundles:any={}
  bundleDetails:any={}
  bundleCart:any={}
  userId:number=0
  currentDate: Date = new Date();
  dataObj:any
  cId:number

  productIds:any=[]
  constructor(private bundleService:BundleService,
    private toastr:ToastrService,
    private cartService:CartService,
    private bundleDetailService:BundleDetailService,
    private router:Router) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

 

    if (userId) {
      this.userId = parseInt(userId, 10);
    }

    // this.get()
    this.getBundleCartByUserId()
  }

  getBundleCartByUserId()
  { 
   debugger
   this.cartService.getBundleCartByUserId(this.userId).subscribe((response:any)=>{
   
    // let data:any=response
    // data.forEach(element => {
    //   if(element.isSold==0)
    //   {
    //     debugger
      
  
    //   }
    // });
   

    this.bundles=response.bundles
    this.bundleDetails=response.bundleDetails
   })
  }
 
  // get()
  // { 
  //  this.bundleService.getBundleDetailView().subscribe((response:any)=>{
   
  //    this.bundles=response.bundles
  //   this.bundleDetails=response.bundleDetails
    
  //  })

  deliveryDetail(bundleId:number,cId:number)
  {
   let path = '/delivery-details';
   this.router.navigate([path])
   localStorage.setItem('bundleId', bundleId.toString());
   var myProductId=0
   localStorage.setItem('productId', myProductId.toString());

   debugger
   localStorage.setItem('cId', cId.toString());
  }

  }


