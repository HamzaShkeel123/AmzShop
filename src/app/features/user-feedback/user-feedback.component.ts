import { Component, OnInit } from '@angular/core';
import { UserFeedbackService } from 'src/app/_myServices/user-feedback.service';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.css']
})
export class UserFeedbackComponent implements OnInit {

  feedbacks:any
  constructor(private userFeedbackService:UserFeedbackService) { }

  ngOnInit(): void {
    this.get()
  }

  get()
  { 
   this.userFeedbackService.getUserFeedback().subscribe((response:any)=>{
   
    debugger
     this.feedbacks=response
   })

}

}
