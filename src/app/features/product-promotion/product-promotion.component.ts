import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductPromotionService } from 'src/app/_myServices/product-promotion.service';

@Component({
  selector: 'app-product-promotion',
  templateUrl: './product-promotion.component.html',
  styleUrls: ['./product-promotion.component.css']
})
export class ProductPromotionComponent implements OnInit {

  
  form:FormGroup;
  productPromotions:any;
  products:any;
  start: string = ''
  end: string = ''

  public breadcrumb: any;
 errorMessage:string=null;
 options = {
  close: true,
  expand: true,
  minimize: true,
  reload: true
};
fltAdmin:number=0
  constructor(
    private fb:FormBuilder,
    private productPromotionService:ProductPromotionService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {

   


 this.form=this.fb.group
 ({
  ProductPromotionId:0,
  ProductDiscount:'',
  FromDate:'',
  TODate:'',
  ProductId:0,
  isActive:true
 })

 this.get();
 this.getProductActive()

  }

  getProductActive()
{
  this.productPromotionService.getProductActive().subscribe((response:any)=>{
     debugger
    this.products=response
  })
}
  
  onEdit(PPId:number)
  {

    this.productPromotionService.getProductPromotionById(PPId).subscribe((response:any)=>{
      let data:any=response;
      debugger
      this.form.patchValue({
        ProductPromotionId:data.productPromotionId,
        ProductId:data.productId,
        ProductDiscount:data.productDiscount,
        FromDate:data.fromDate,
        TODate:data.toDate,
        isActive:data.isActive
      })
      
    })
    debugger
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
    this.productPromotionService.postProductPromotion(resource).subscribe((response:any)=>{
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
    if(resource.ProductDiscount == null || resource.ProductDiscount == ""){
      html+="Discount is required <br/>" ;
    }
    
    
    return html;
  }
 get()
 { 
  this.productPromotionService.getProductPromotion().subscribe((response:any)=>{
  
    this.productPromotions=response
  })
 }

 onReset()
 {
  this.form.patchValue({
    ProductPromotionId:0,
    ProductId:0,
  ProductDiscount:'',
  FromDate:'',
  TODate:'',
  isActive:true

  })
 }

}
