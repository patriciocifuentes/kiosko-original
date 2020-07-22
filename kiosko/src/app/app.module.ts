import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StartupComponent } from './components/setup/startup/startup.component';
import { ProductAddComponent } from './components/products/product-add/product-add.component';
import { AdminSignUpComponent } from './components/setup/admin-sign-up/admin-sign-up.component';
import { ProductCategoryServiceComponent } from './components/products/product-category-service/product-category-service.component';
import { LicensePlanComponent } from './components/setup/license-plan/license-plan.component';
import { KeyComponent } from './components/setup/key/key.component';
import { AdminPinComponent } from './components/setup/admin-pin/admin-pin.component';
import { Company1Component } from './components/setup/company1/company1.component';
import { Company2Component } from './components/setup/company2/company2.component';
import { InfographicComponent } from './components/setup/infographic/infographic.component';
import { RegimeComponent } from './components/setup/regime/regime.component';
import { ModifierAddComponent } from './components/modifiers/modifier-add/modifier-add.component';
import { CheckInfoComponent } from './components/setup/check-info/check-info.component';
import { IdConfirmationComponent } from './components/setup/id-confirmation/id-confirmation.component';
import { ElectronicCheckNotificationComponent } from './components/setup/electronic-check-notification/electronic-check-notification.component';
import { ProductsForSaleComponent } from './components/setup/products-for-sale/products-for-sale.component';
import { LogInComponent } from './components/logIn/log-in/log-in.component';
import { CashierOpenComponent } from './components/cashier/cashier-open/cashier-open.component';
import { DiscountAddComponent } from './components/setup/discount-add/discount-add.component';
import { DiscountConfigComponent } from './components/discounts/discount-config/discount-config.component';
import { DiscountToProductComponent } from './components/discounts/discount-to-product/discount-to-product.component';
import { DiscountsListComponent } from './components/discounts/discounts-list/discounts-list.component';
import { AccountsComponent } from './components/account/accounts/accounts.component';
import { CashInOutComponent } from './components/cashier/cash-in-out/cash-in-out.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { CategoryListComponent } from './components/categories/category-list/category-list.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { NotificationListComponent } from './components/notifications/notification-list/notification-list.component';
import { CashierCloseComponent } from './components/cashier/cashier-close/cashier-close.component';
import { DiscountListTableComponent } from './components/discounts/discount-list-table/discount-list-table.component';
import { AnnulmentComponent } from './components/check/annulment/annulment.component';
import { ForgotPasswordComponent } from './components/logIn/forgot-password/forgot-password.component';
import { UserPinComponent } from './components/user/user-pin/user-pin.component';
import { CheckComponent } from './components/check/check/check.component';
import { InternalControlComponent } from './components/menu/internal-control/internal-control.component';
import { CheckDetailComponent } from './components/check/check-detail/check-detail.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserComponent } from './components/user/user/user.component';
import { ForgotPinComponent } from './components/user/forgot-pin/forgot-pin.component';
import { SetupReadyComponent } from './components/setup/setup-ready/setup-ready.component';
import { SQLite } from "@ionic-native/sqlite/ngx";
import { DataService } from './provider/data.service';
import { FormsModule } from '@angular/forms';
import { ReportPrincipalComponent } from './components/reports/report-principal/report-principal.component';
import { ReportUserComponent } from './components/reports/report-user/report-user.component';

@NgModule({
  declarations: [
    AppComponent,
    StartupComponent,
    ProductAddComponent,
    AdminSignUpComponent,
    ProductCategoryServiceComponent,
    LicensePlanComponent,
    KeyComponent,
    AdminPinComponent,
    Company1Component,
    Company2Component,
    InfographicComponent,
    RegimeComponent,
    ModifierAddComponent,
    CheckInfoComponent,
    IdConfirmationComponent,
    ElectronicCheckNotificationComponent,
    ProductsForSaleComponent,
    LogInComponent,
    CashierOpenComponent,
    DiscountAddComponent,
    DiscountConfigComponent,
    DiscountToProductComponent,
    DiscountsListComponent,
    AccountsComponent,
    CashInOutComponent,
    ClientListComponent,
    CategoryListComponent,
    ProductListComponent,
    NotificationListComponent,
    CashierCloseComponent,
    DiscountListTableComponent,
    AnnulmentComponent,
    ForgotPasswordComponent,
    UserPinComponent,
    CheckComponent,
    InternalControlComponent,
    CheckDetailComponent,
    UserListComponent,
    UserComponent,
    ForgotPinComponent,
    SetupReadyComponent,
    ReportPrincipalComponent,
    ReportUserComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    DataService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
