import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BundleService } from 'src/app/_myServices/bundle.service';

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.css']
})
export class BundleComponent implements OnInit {

  form:FormGroup;
  bundles:any;
 
  constructor(
    private fb:FormBuilder,
    private bundleService:BundleService,
    private toastr:ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {

   


 this.form=this.fb.group
 ({
  B_id:0,
  B_name:'',
  B_ammount:0,
  isActive:true
 })

 this.get();

  }

  
  onEdit(b_id:number)
  {
    this.bundleService.getBundleById(b_id).subscribe((response:any)=>{
      let data:any=response;
      debugger
      this.form.patchValue({
        B_id:data.b_id,
        B_name:data.b_name,
        
        B_ammount:data.b_ammount,
        
        isActive:data.isActive
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
    this.bundleService.postBundle(resource).subscribe((response:any)=>{
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
    if(resource.B_name == null || resource.B_name == ""){
      html+="Bundle Name is required <br/>" ;
    }
   
    
    return html;
  }

  bundleDetails() {
    debugger
    // this.dataService.setLeadId(leedId);
    let path = '/bundle-detail';
    this.router.navigate([path])
  }

 get()
 { 
  this.bundleService.getBundle().subscribe((response:any)=>{
  
    this.bundles=response
  })
 }

 onReset()
 {
  this.form.patchValue({
    b_id:0,
  B_name:'',
  B_ammount:0,
  isActive:true

  })
 }

}
