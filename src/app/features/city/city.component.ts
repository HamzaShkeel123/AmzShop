import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CityService } from 'src/app/_myServices/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  form:FormGroup;
  bundles:any;
 cities:any
//  states:any
  constructor(
    private fb:FormBuilder,
    private cityService:CityService,
    private toastr:ToastrService,
    // private router: Router,
  ) { }

  ngOnInit(): void {

   


 this.form=this.fb.group
 ({
  CId:0,
  CName:'',
  StateId:0,
  isActive:true
 })

 this.get();
  }

  
  onEdit(cId:number)
  {
    debugger
    this.cityService.getCityById(cId).subscribe((response:any)=>{
      let data:any=response;
      debugger
      this.form.patchValue({
        CId:data.cId,
        StateId:data.stateId,
        CName:data.cName,
        
        
        isActive:data.isActive
      })
      
    })
    this.onReset();
    window.scroll(0,0);
  }
 
  // getStateActive()
  // {
  //   this.cityService.getStateActive().subscribe((response:any)=>{
  //      debugger
  //     this.states=response
  //   })
  // }

  onSubmit()
  {
    let resource=this.form.value;
    debugger
    

    let html = this.validate(resource);
  if(html == "" ){
    
      // this.errorMessage
    this.cityService.postCity(resource).subscribe((response:any)=>{
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
    if(resource.CName == null || resource.CName == ""){
      html+="City Name is required <br/>" ;
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
  this.cityService.getCity().subscribe((response:any)=>{
  debugger
    this.cities=response
  })
 }

 onReset()
 {
  this.form.patchValue({
    CId:0,
    CName:'',
    StateId:0,
    isActive:true

  })
 }

}
