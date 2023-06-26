import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { DashboarddComponent } from './dashboardd/dashboardd.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProDetailsViewComponent } from './pro-details-view/pro-details-view.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { ProductPromotionComponent } from './product-promotion/product-promotion.component';
import { ProductPromotionViewComponent } from './product-promotion-view/product-promotion-view.component';
import { BundleComponent } from './bundle/bundle.component';
import { BundleDetailComponent } from './bundle-detail/bundle-detail.component';
import { BundleViewComponent } from './bundle-view/bundle-view.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { UserProductByCategoryComponent } from './user-product-by-category/user-product-by-category.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CityComponent } from './city/city.component';
import { StateComponent } from './state/state.component';
import { BundleToCartComponent } from './bundle-to-cart/bundle-to-cart.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { OrdersComponent } from './orders/orders.component';





@NgModule({
  declarations: [
    AdminComponent,
    CategoryComponent,
    ProductComponent,
    DashboarddComponent,
    ProductByCategoryComponent,
    UserRegisterComponent,
    UserLoginComponent,
    ProDetailsViewComponent,
    UserFeedbackComponent,
    ProductPromotionComponent,
    ProductPromotionViewComponent,
    BundleComponent,
    BundleDetailComponent,
    BundleViewComponent,
    AddStockComponent,
    UserProductByCategoryComponent,
    ShoppingCartComponent,
    CityComponent,
    StateComponent,
    BundleToCartComponent,
    DeliveryDetailsComponent,
    OrdersComponent,
    
    
  ],
  imports: [
    CommonModule,
    // FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
  ]
})
export class FeaturesModule { }
