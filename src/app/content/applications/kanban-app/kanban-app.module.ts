import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanComponent } from './kanban/kanban.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { QuillModule } from 'ngx-quill';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [KanbanComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    NgSelectModule,
    QuillModule.forRoot(),
    DragulaModule.forRoot(),
    ReactiveFormsModule,
    PerfectScrollbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: KanbanComponent 
      }
    ])
  ]
})
export class KanbanAppModule { }
