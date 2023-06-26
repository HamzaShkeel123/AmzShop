import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_myServices/category.service';
import { ProductService } from 'src/app/_myServices/product.service';
import { SignupService } from 'src/app/_myServices/signup.service';

@Component({
  selector: 'app-dashboardd',
  templateUrl: './dashboardd.component.html',
  styleUrls: ['./dashboardd.component.css']
})
export class DashboarddComponent implements OnInit {

  categories:''
  products:''
  admins:''
  totalCategories:number=0
  totalProducts:number=0
  totalAdmins:number=0

  // showCategories:''
  // showAdmins:''
  // showProducts:''
  
  constructor(private productService:ProductService,
    private categoryService:CategoryService,
    private signupService:SignupService,
    private locationStrategy: LocationStrategy) { 
      history.pushState(null, '', window.location.href);
      this.locationStrategy.onPopState(() => {
        history.pushState(null, '', window.location.href);//prevent from going back using browser back button
      });
    }

  ngOnInit(): void {

    this.getCategories()
    this.getProducts()
    this.getAdmins()
  }

  getCategories()
  {
   this.categoryService.getCat().subscribe((response:any)=>{
    // debugger
    
     this.categories=response
     this.totalCategories=this.categories.length
   })
  }

  getProducts()
  {
    // debugger
    this.productService.getPro().subscribe((response:any)=>{
      
      
       this.products=response
       this.totalProducts=this.products.length
     })
  }

  getAdmins()
  {
    
    this.signupService.getSignup().subscribe((response:any)=>{
      
      
       this.admins=response
       this.totalAdmins=this.admins.length
     })
  }

  
}
