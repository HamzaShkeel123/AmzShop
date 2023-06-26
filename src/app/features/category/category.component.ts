import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/_myServices/category.service';
import { fromByteArray } from 'base64-js';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  form:FormGroup
  categories:any
  selectedFile:File=null;
  myImage:""
  show:boolean=false
  // selectedImage:string
  constructor(private fb:FormBuilder,
    private categoryService:CategoryService,
    private toastr:ToastrService,
    private http:HttpClient) { }

  ngOnInit(): void {

    this.form=this.fb.group({
      Cat_Id:0,
      Cat_Name:'',
      Cat_Image:null,
      IsActive:true,

    })
    this.get();
  }

  get()
  {
   this.categoryService.getCat().subscribe((response:any)=>{

     this.categories=response
   })
  }

  onDelete(cat_Id:number)
  {
    debugger
    
    this.categoryService.delCat(cat_Id).subscribe((response:any)=>{
      // let data:any=response;
      this.get();
      // this.toastr.success(data.message)
    })
  }

  
  onUnDelete(cat_Id:number)
  {
    debugger
    
    this.categoryService.unDelCat(cat_Id).subscribe((response:any)=>{
      // let data:any=response;
      this.get();
      // this.toastr.success(data.message)
    })
  }
  onEdit(cat_Id:number)
  {
    debugger
    this.categoryService.getCatById(cat_Id).subscribe((response:any)=>{
      let data:any=response;
    this.show=true
      this.form.patchValue({
        Cat_Id:data.cat_Id,
        Cat_Name:data.cat_Name,
        isActive:data.isActive,
        
        Cat_Image:data.cat_ImageView
      })
      debugger
      this.myImage=data.cat_ImageView

     
      // debugger
      // var imagePath = data.cat_Image
      // const filename = imagePath.split("\\").pop();
      //  this.form.controls.Cat_Image.setValue(filename)
      // // decode the base64 string into a binary data array
      // // const byteCharacters = fromByteArray(new Uint8Array(Buffer.from(data.cat_ImageView, 'base64')));
      // // create a blob object from the binary data
      // // const byteArray = new Uint8Array(byteCharacters);
      // const blob = new Blob([data.cat_ImageView], { type: filename })

      // // create a file object from the blob
      // const file = new File([blob], filename, { type: filename })


      // this.selectedFile = file
      // console.log(this.selectedFile)
      // debugger
    })
    this.onReset();
    window.scroll(0,0);
  }

  onFileSelected(event)
  {
    this.selectedFile=<File>event.target.files[0];
    
  }

  // onFileSelected(event) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.selectedImage = reader.result as string;
  //   }
  //   reader.readAsDataURL(file);
  // }

  onSubmit()
  {
    const formData=new FormData();
    let resource=this.form.value;
    let html = this.validate(resource);
  if(html == "" ){
    formData.append('image',this.selectedFile,this.selectedFile.name);
    formData.append('CategoryModel.Cat_Name',resource.Cat_Name)
    formData.append('CategoryModel.IsActive',resource.IsActive)
    formData.append('CategoryModel.Cat_Id',resource.Cat_Id)

    this.categoryService.postCat(formData).subscribe((response:any)=>{

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

    debugger
    let html = "";
    if(resource.Cat_Name == null || resource.Cat_Name == ""){
      html+="Name is required <br/>" ;
    }
    // if(resource.Cat_Image == null || resource.Cat_Image == ""){
    //   html+="Image is required <br/>" ;
    // }


    return html;
  }



  onReset()
  {
   this.form.patchValue({
     Cat_Id:0,
     Cat_Name:"",
     Cat_Image:"",


   })
  }

}
