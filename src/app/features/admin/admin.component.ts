import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/_myServices/admin.service';
import { SignupService } from 'src/app/_myServices/signup.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  form:FormGroup;
  admins:any;
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
    private adminService:AdminService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {

   


 this.form=this.fb.group
 ({
  S_Id:0,
  S_Email:'',
  S_Password:'',
  S_ConfirmPassword:'',
  isActive:true
 })

 this.get();

  }

  
  onEdit(s_Id:number)
  {
    this.adminService.getSignupById(s_Id).subscribe((response:any)=>{
      let data:any=response;
      debugger
      this.form.patchValue({
        S_Id:data.s_Id,
        S_Email:data.s_Email,
        
        S_Password:data.s_Password,
        S_ConfirmPassword:data.s_Password,
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
    if(resource.S_Password==resource.S_ConfirmPassword)
    {
      // this.errorMessage
    this.adminService.postUser(resource).subscribe((response:any)=>{
      let data:any=response

      if(data.message=="User Already Exist")
      {
      this.toastr.error(data.message)
      }
      else if(data.message=="User Added Successfully")
      {
this.toastr.success(data.message)      
}

      this.get();
      this.onReset()
    //  this.toastr.success(response.message)
    })
  }
  else{
    this.errorMessage="enter matching password and confirm pasword"
  }

  }
  else{
    this.toastr.error(html);
  }



  }


  private validate(resource){
   
    
    let html = "";
    if(resource.S_Email == null || resource.S_Email == ""){
      html+="Email is required <br/>" ;
    }
    if(resource.S_Password == null || resource.S_Password == ""){
      html+="Password is required <br/>" ;
    }
    if(resource.S_ConfirmPassword == null || resource.S_ConfirmPassword == ""){
      html+="Confirm Password is required <br/>" ;
    }
    
    return html;
  }
 get()
 { 
  this.adminService.getSignup().subscribe((response:any)=>{
  
    this.admins=response
  })
 }

 onReset()
 {
  this.form.patchValue({
    S_Id:0,
    S_Email:"",
    S_Password:"",
    S_ConfirmPassword:""

  })
 }

}
