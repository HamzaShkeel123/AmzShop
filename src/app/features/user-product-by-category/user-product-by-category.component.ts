import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/_myServices/cart.service';
import { CategoryService } from 'src/app/_myServices/category.service';
import { ProductService } from 'src/app/_myServices/product.service';

@Component({
  selector: 'app-user-product-by-category',
  templateUrl: './user-product-by-category.component.html',
  styleUrls: ['./user-product-by-category.component.css']
})
export class UserProductByCategoryComponent implements OnInit {

  form:FormGroup
  categories:any
  proByCat:any=[]
  pro_Id=0

  dataObj:any;
  productId=0
  currentDate: Date = new Date();
  formattedDate: string;
 
  userId: number;
  quantity:number=0

  fromDates:any
  toDates:any
  showPromotion:boolean=false
    year=null
    month=null
    day=null

    
  constructor(
    private fb:FormBuilder,
    private categoryService:CategoryService,
    private toastr:ToastrService,
    private http:HttpClient,
    private productService:ProductService,
    private modalService:NgbModal,
    private cartService:CartService
  ) { 

    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth() + 1;
    const day = this.currentDate.getDate();
    this.formattedDate = `${year}-${month}-${day}`;
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

 

    if (userId) {
      this.userId = parseInt(userId, 10);
    }

    this.form = this.fb.group({
      cat_Id:0,
      Quantity:0
    });
    
    this.getCatActive()
  }

  //for shopping cart
  sendToCart(productId:number)
  {
    let resource=this.form.value;
    debugger
  //  this.productId=productId;
   this.dataObj={
    CId:0,
    UserId:this.userId,
    ProductId:productId,
    Quantity:resource.Quantity,
    CreatedAt:this.currentDate,
    IsActive:true
   }
   this.cartService.postCart(this.dataObj).subscribe((response:any)=>{
    let data:any=response

    
this.toastr.success(data.message)      
 
  })

  }
  proCatModalFun(modal, pid)
  {
    debugger
    this.pro_Id = pid;
    this.modalService.open(modal, { size: 'lg', windowClass: 'animated fadeInDown' });
  }
  getCatActive()
  {
   this.categoryService.getCatActive().subscribe((response:any)=>{

     this.categories=response

     const   currentDate = new Date().toISOString()
const dateParts = currentDate.substr(0, 10).split('-'); 
 this.year = dateParts[0];  
this.month = dateParts[1];  
this.day = dateParts[2];

   })
  }

  onProByCat(cat_Id:number)
  {
    debugger
    this.productService.getProByCatId(cat_Id).subscribe((response:any)=>{
      this.proByCat=response
     
    })
    
  }

}
