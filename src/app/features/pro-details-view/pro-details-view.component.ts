import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/_myServices/product.service';

@Component({
  selector: 'app-pro-details-view',
  templateUrl: './pro-details-view.component.html',
  styleUrls: ['./pro-details-view.component.css']
})
export class ProDetailsViewComponent implements OnInit {

  // @Input() pro_Id=0
  constructor(private fb:FormBuilder,
    private productService:ProductService
    ) { }

  ngOnInit(): void {
    // this.onDetails(this.pro_Id)
  }

  // onDetails(pro_Id:number)
  // {
  //   debugger
  //   this.productService.getProById(pro_Id).subscribe((response:any)=>{
  //     let data:any=response;
  //     debugger
      
      
  //   })
    
  // }

}
