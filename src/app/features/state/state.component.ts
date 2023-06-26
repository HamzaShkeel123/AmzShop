import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StateService } from 'src/app/_myServices/state.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  form:FormGroup;
  bundles:any;
 states:any
 cities:any
  constructor(
    private fb:FormBuilder,
    private stateService:StateService,
    private toastr:ToastrService,
    // private router: Router,
  ) { }

  ngOnInit(): void {

   


 this.form=this.fb.group
 ({
  StateId:0,
  // CId:0,
  SName:'',
  isActive:true
 })

 this.get();
//  this.getCityActive();
  }

  
  onEdit(stateId:number)
  {
    debugger
    this.stateService.getStateById(stateId).subscribe((response:any)=>{
      let data:any=response;
      debugger
      this.form.patchValue({
        StateId:data.stateId,
        CId:data.cId,
        SName:data.sName,
        
        
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
    this.stateService.postState(resource).subscribe((response:any)=>{
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
    if(resource.SName == null || resource.SName == ""){
      html+="State Name is required <br/>" ;
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
  this.stateService.getState().subscribe((response:any)=>{
  debugger
    this.states=response
  })
 }

//  getCityActive()
// {
//   this.stateService.getCityActive().subscribe((response:any)=>{
//      debugger
//     this.cities=response
//   })
// }

 onReset()
 {
  this.form.patchValue({
    StateId:0,
    CId:0,
    SName:'',
    isActive:true

  })
 }

}
