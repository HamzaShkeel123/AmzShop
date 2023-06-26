import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DeliveryDetailsService } from 'src/app/_myServices/delivery-details.service';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.css']
})
export class DeliveryDetailsComponent implements OnInit {

  
  form:FormGroup;
  deliveryDetails:any;
  userId:number=0;
  cities:any
  productId:number
  bundleId:number
  cId:number
  constructor(
    private fb:FormBuilder,
    private deliveryDetailsService:DeliveryDetailsService,
    private toastr:ToastrService,
    private router:Router,
    // private router: Router,
  ) { }

  ngOnInit(): void {

    const userId = localStorage.getItem('userId');

 

    if (userId) {
      this.userId = parseInt(userId, 10);
    }


    const productId = localStorage.getItem('productId');

 

    if (productId) {
      this.productId = parseInt(productId, 10);
    }

    const cId = localStorage.getItem('cId');

 

    if (cId) {
      this.cId = parseInt(cId, 10);
    }
    debugger
    const bundleId = localStorage.getItem('bundleId');

 

    if (bundleId) {
      this.bundleId = parseInt(bundleId, 10);
    }


   

debugger
 this.form=this.fb.group
 ({
  DDId:0,
  UserId:0,
  Email:'',
  Phone:0,
  CityId:0,
  UserState:'',
  UserAddress:'',
  PostalCode:0,

  
  isActive:true
 })

this.getCityActive();
  }

  
  getCityActive()
  {
    this.deliveryDetailsService.getCityActive().subscribe((response:any)=>{
       debugger
      this.cities=response
    })
  }
 

  onSubmit()
  {
    if(this.bundleId>0)
    {
      this.productId=0
    }
    else if(this.productId>0)
    {
      this.bundleId=0
    }
    let resource=this.form.value;
    resource.userId=this.userId;
    resource.productId=this.productId
    resource.bundleId=this.bundleId
    resource.cId=this.cId
    debugger
    

    let html = this.validate(resource);
  if(html == "" ){
    
      // this.errorMessage
    this.deliveryDetailsService.postDeliveryDetails(resource).subscribe((response:any)=>{
      let data:any=response

     
this.toastr.success(data.message)      
this.router.navigate(['/shopping-cart']);


      
    //  this.toastr.success(response.message)
    })
  
  

  }
  else{
    this.toastr.error(html);
  }



  }


  private validate(resource){
   
    
    let html = "";
    if(resource.Email == null || resource.Email == ""){
      html+="State Name is required <br/>" ;
    }
   
    
    return html;
  }

  

}
