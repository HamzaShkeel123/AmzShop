import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BundleDetailService } from 'src/app/_myServices/bundle-detail.service';

@Component({
  selector: 'app-bundle-detail',
  templateUrl: './bundle-detail.component.html',
  styleUrls: ['./bundle-detail.component.css']
})
export class BundleDetailComponent implements OnInit {

  
  form:FormGroup;
  bundleDetails:any;
  bundles:any;
  products:any;
  public breadcrumb: any;
 errorMessage:string=null;
 
fltAdmin:number=0
  constructor(
    private fb:FormBuilder,
    private bundleDetailService:BundleDetailService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {

   


 this.form=this.fb.group
 ({
  BundleDetailId:0,
  ProductId:0,
  BundleId:0,

 })

 this.get();
this.getBundleActive();
this.getProductActive();
  }

  getBundleActive()
{
  this.bundleDetailService.getBundleActive().subscribe((response:any)=>{
     debugger
    this.bundles=response
  })
}
getProductActive()
{
  this.bundleDetailService.getProductActive().subscribe((response:any)=>{
     debugger
    this.products=response
  })
}

  onEdit(s_Id:number)
  {
    this.bundleDetailService.getBundleDetailById(s_Id).subscribe((response:any)=>{
      let data:any=response;
      debugger
      this.form.patchValue({
        BundleDetailId:data.bundleDetailId,
        BundleId:data.bundleId,
        ProductId:data.productId
        
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
    this.bundleDetailService.postBundleDetail(resource).subscribe((response:any)=>{
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
    if(resource.BundleId == null || resource.BundleId == ""){
      html+="Bundle is required <br/>" ;
    }
    if(resource.ProductId == null || resource.ProductId == ""){
      html+="Product is required <br/>" ;
    }
   
    
    return html;
  }
 get()
 { 
  this.bundleDetailService.getBundleDetail().subscribe((response:any)=>{
  
    this.bundleDetails=response
  })
 }

 onReset()
 {
  this.form.patchValue({
    BundleId:0,
    ProductId:"",
   

  })
 }

}
