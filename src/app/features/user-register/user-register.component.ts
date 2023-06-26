import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserRegisterService } from 'src/app/_myServices/user-register.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  form:FormGroup;
  errorMessage:string
  constructor(private fb:FormBuilder,
    private userRegisterService:UserRegisterService,
    private toastr:ToastrService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      U_Id:0,
      // tenantId: this.tenantId,
      U_Email:null,
      U_Password: null,
      U_ConfirmPassword:null,
      UserName:null
    });
  }

  submit()
  {
    debugger
    let resource=this.form.value;
    if(resource.U_Password==resource.U_ConfirmPassword)
    {
    this.userRegisterService.postUser(resource).subscribe((response:any)=>{
      // this.errorMessage=resource.message
      let data:any=response

      if(data.message=="User Already Exist")
      {
      this.toastr.error(data.message)
      }
      else if(data.message=="User Added Successfully")
      {
this.toastr.success(data.message)      
}
    this.onReset()
    })
  }

  else{
    this.errorMessage="Password and Confirm Password doesnt match"
  }
  }
  
  
  
  
  
  onReset()
  {
    this.form.patchValue({
      U_Id:0,
      U_Email:"",
      U_Password:"",
      U_ConfirmPassword:"",
    
    })
  }

}
