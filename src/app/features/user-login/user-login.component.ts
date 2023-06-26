import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/_myServices/shared.service';
import { UserRegisterService } from 'src/app/_myServices/user-register.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  form:FormGroup;
  submitted = false;
  checkUser:string='user';
  userId:number;

  res:boolean=false;
  constructor(private fb:FormBuilder,
    private userRegisterService:UserRegisterService,
    private router:Router,
    private toastr:ToastrService,
    private sharedService: SharedService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      U_Id:0,
      // tenantId: this.tenantId,
      U_Email:null,
      U_Password: null,
      U_ConfirmPassword:null
      
    });
  }

  


  tryLogin()
  {
    debugger

    this.submitted = true;
    
      let resource=this.form.value;
      this.userRegisterService.getLoginByModel(resource).subscribe((response:any)=>{
      this.submitted = false
debugger
      let data:any=response

      if(data.response==true)
        {
        localStorage.removeItem('currentLayoutStyle');
        this.router.navigate(['/user-product-by-category']);
        this.sharedService.checkUser = this.checkUser;
debugger
        this.userId =data.u_Id;

        //local storage  userId user-login to user-product-by-category without shared service
        localStorage.setItem('userId', this.userId.toString());
      }
      else{
        this.toastr.error("Incorrect Username or Password");
        
      }
      })
  }













}
