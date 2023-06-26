import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BundleDetailService } from 'src/app/_myServices/bundle-detail.service';
import { BundleService } from 'src/app/_myServices/bundle.service';
import { CartService } from 'src/app/_myServices/cart.service';
import { SharedService } from 'src/app/_myServices/shared.service';

@Component({
  selector: 'app-bundle-view',
  templateUrl: './bundle-view.component.html',
  styleUrls: ['./bundle-view.component.css']
})
export class BundleViewComponent implements OnInit {
  bundles:any={}
  bundleDetails:any={}
  userId:number=0
  currentDate: Date = new Date();
  dataObj:any
  checkUser:string
  productIds:any=[]
  constructor(private bundleService:BundleService,
    private toastr:ToastrService,
    private cartService:CartService,
    private bundleDetailService:BundleDetailService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
  this.checkUser=this.sharedService.checkUser
 

    if (userId) {
      this.userId = parseInt(userId, 10);
    }

    this.get()
  }

  //for shopping cart
  sendToCart(bundleId:number)
  {
    debugger
    
    // this.bundleDetailService.getProductByBundleIdActive(bundleId).subscribe((response:any)=>{
    //   let data:any=response
      // this.productIds=data.map((element: any) => element.pro_Id);
      //   console.log(this.productIds);

      
    //   data.forEach(element => {
    //     this.productIds.push(element.pro_Id);
    //     console.log(this.productIds);
    //   });
    
     
    // })


   debugger
   this.dataObj={
    CId:0,
    UserId:this.userId,
    BundleId:bundleId,
    
    // ProductIds:[],
    // Quantity:0,
    CreatedAt:this.currentDate,
    IsActive:true
   }

  //  for (const productId of this.productIds) {
  //   this.dataObj.ProductIds.push(productId);
  // }
  
   debugger
   this.cartService.postCartBundle(this.dataObj).subscribe((response:any)=>{
    let data:any=response

    
  this.toastr.success(data.message) 
     
  })

  }
 
  get()
  { 
   this.bundleService.getBundleDetailView().subscribe((response:any)=>{
   
     this.bundles=response.bundles
    this.bundleDetails=response.bundleDetails
    
   })
  }

}
