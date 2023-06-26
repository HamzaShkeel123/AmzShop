import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/_myServices/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  form:FormGroup
  products:any
  categories:any
  selectedFile:File=null
  constructor(private fb:FormBuilder,
    private toastr:ToastrService,
    private productService:ProductService) { }

  ngOnInit(): void {

    this.form=this.fb.group({
      Pro_Id:0,
      Pro_Name:'',
      Pro_Price:'',
      Pro_Image:'',
      Pro_Description:'',
      IsActive:true,
      Cat_Id:0
    })

    this.get()
    this.getCategoryActive()

  }

  onDelete(pro_Id:number)
  {
    debugger
    
    this.productService.delPro(pro_Id).subscribe((response:any)=>{
      // let data:any=response;
      this.get();
      // this.toastr.success(data.message)
    })
  }

  
  onUnDelete(pro_Id:number)
  {
    debugger
    
    this.productService.unDelPro(pro_Id).subscribe((response:any)=>{
      // let data:any=response;
      this.get();
      // this.toastr.success(data.message)
    })
  }

  get()
    { 
     this.productService.getPro().subscribe((response:any)=>{
     
      debugger
       this.products=response
     })

}

 
getCategoryActive()
{
  this.productService.getCatActive().subscribe((response:any)=>{
     debugger
    this.categories=response
  })
}


onEdit(pro_Id:number)
  {
    this.productService.getProById(pro_Id).subscribe((response:any)=>{
      let data:any=response;
      debugger
      this.form.patchValue({
        Pro_Id:data.pro_Id,
        Pro_Name:data.pro_Name,
        Pro_Price:data.pro_Price,
        // Pro_Image:data.pro_Image,
        Pro_Description:data.pro_Description,
        isActive:data.isActive,
        Cat_Id:data.cat_Id

      })
      
    })
    this.onReset();
    window.scroll(0,0);
  }

  onFileSelected(event)
  {
    this.selectedFile=<File>event.target.files[0];
  }

  onSubmit()
  {
    
    debugger
    const formData=new FormData();

    let resource=this.form.value;
    
    let html = this.validate(resource);
  if(html == "" ){
    formData.append('image',this.selectedFile,this.selectedFile.name);
    
    
    formData.append('ProductModel.Pro_Id',resource.Pro_Id)
    formData.append('ProductModel.Pro_Name',resource.Pro_Name)
    formData.append('ProductModel.Pro_Price',resource.Pro_Price)
    formData.append('ProductModel.Pro_Description',resource.Pro_Description)
    formData.append('ProductModel.IsActive',resource.IsActive)
    formData.append('ProductModel.Cat_Id',resource.Cat_Id)
    
    this.productService.postPro(formData).subscribe((response:any)=>{
      
      let data:any=response
      this.get();
      this.toastr.success(data.message)
      debugger
      this.onReset()
     
    })
  
 

  }
  else{
    this.toastr.error(html);
  }



  }

  private validate(resource){
   
    
    let html = "";
    if(resource.Pro_Name == null || resource.Pro_Name == ""){
      html+="Name is required <br/>" ;
    }
    if(resource.Pro_Price == null || resource.Pro_Price == ""){
      html+="Price is required <br/>" ;
    }
   
    if(resource.Pro_Description == null || resource.Pro_Description == ""){
      html+="Description is required <br/>" ;
    }
    if(resource.Cat_Id == null || resource.Cat_Id == ""){
      html+="Category is required <br/>" ;
    }
    
    return html;
  }

  onReset()
  {
   this.form.patchValue({
    Pro_Id:0,
    Pro_Name:'',
    Pro_Price:'',
    Pro_Image:'',
    Pro_Description:'',
    IsActive:true,
    Cat_Id:0
    
 
   })
  }

}
