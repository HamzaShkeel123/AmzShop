import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AddStockService } from 'src/app/_myServices/add-stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  form:FormGroup;
  products:any;
  stocks:any;
 
  constructor(
    private fb:FormBuilder,
    private addStockService:AddStockService,
    private toastr:ToastrService,
   
  ) { }

  ngOnInit(): void {

   


 this.form=this.fb.group
 ({
  StockId:0,
  ProductId:0,
  SupplierName:'',
  Quantity:0,
  TotalPrice:0,
  IsActive:true
 })

 this.get();
 this.getProducts();

  }

  
  onEdit(StockId:number)
  {
    this.addStockService.getStockById(StockId).subscribe((response:any)=>{
      let data:any=response;
      debugger
      this.form.patchValue({
        StockId:data.stockId,
        ProductId:data.productId,
        SupplierName:data.supplierName,
        Quantity:data.quantity,
        TotalPrice:data.totalPrice,
        IsActive:data.isActive
      })
      
    })
    this.onReset();
    window.scroll(0,0);
  }
 

  onSubmit()
  {
    let resource=this.form.value;
    debugger
    

    let html = this.validate(resource);
  if(html == "" ){
    
      // this.errorMessage
    this.addStockService.postStock(resource).subscribe((response:any)=>{
      let data:any=response

     
this.toastr.success(data.message)      


      this.get();
      this.onReset()
    //  this.toastr.success(response.message)
    })
  
  

  }
  else{
    this.toastr.error(html);
  }



  }


  private validate(resource){
   
    
    let html = "";
    if(resource.ProductId == null || resource.ProductId == ""){
      html+="Product Name is required <br/>" ;
    }
   
    
    return html;
  }

  // bundleDetails() {
  //   debugger
  //   // this.dataService.setLeadId(leedId);
  //   let path = '/bundle-detail';
  //   this.router.navigate([path])
  // }

 get()
 { 
  this.addStockService.getStock().subscribe((response:any)=>{
  
    this.stocks=response
  })
 }

 
 getProducts()
 { 
  this.addStockService.getProductActive().subscribe((response:any)=>{
  
    this.products=response
  })
 }

 onReset()
 {
  this.form.patchValue({
    StockId:0,
    ProductId:0,
    SupplierName:'',
    Quantity:0,
    TotalPrice:0,
    isActive:true

  })
 }

}
