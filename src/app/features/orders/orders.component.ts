import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DeliveryDetailsService } from 'src/app/_myServices/delivery-details.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  form:FormGroup;
  orders:any
  constructor(
    private fb:FormBuilder,
    private deliveryDetailsService:DeliveryDetailsService,
    private toastr:ToastrService,
  ) { 

  }

  ngOnInit(): void {

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
  orderStatus:false,
  
  isActive:true
 })
 this.getOrders()
  }

   
  getOrders()
  {
    this.deliveryDetailsService.getOrders().subscribe((response:any)=>{
       debugger
      this.orders=response
      
    })
  }

  onSend(DDID:number)
  {
    debugger
    this.deliveryDetailsService.orderStatusDelivered(DDID).subscribe((response:any)=>{
      this.getOrders()
    })
    
  }
}
