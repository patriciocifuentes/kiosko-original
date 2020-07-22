import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/* Rutas importadas */
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
import { DiscountsListComponent } from './components/discounts/discounts-list/discounts-list.component';
import { DiscountToProductComponent } from './components/discounts/discount-to-product/discount-to-product.component';
import { DiscountConfigComponent } from './components/discounts/discount-config/discount-config.component';
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
import { ReportPrincipalComponent } from './components/reports/report-principal/report-principal.component';
import { ReportUserComponent } from './components/reports/report-user/report-user.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'check',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'startup',
    component: StartupComponent
  },
  {
    path: 'productadd',
    component: ProductAddComponent
  },
  {
    path: 'adminsignup',
    component: AdminSignUpComponent
  },
  {
    path: 'products',
    component: ProductCategoryServiceComponent
  },
  {
    path: 'licenseplan',
    component: LicensePlanComponent
  },
  {
    path: 'key',
    component: KeyComponent
  },
  {
    path: 'adminpin',
    component: AdminPinComponent
  },
  {
    path: 'company1',
    component: Company1Component
  },
  {
    path: 'company2',
    component: Company2Component
  },
  {
    path: 'infographic',
    component: InfographicComponent
  },
  {
    path: 'regime',
    component: RegimeComponent
  },
  {
    path: 'modifiers',
    component: ModifierAddComponent
  },
  {
    path: 'checkinfo',
    component: CheckInfoComponent
  },
  {
    path: 'idconfirmation',
    component: IdConfirmationComponent
  },
  {
    path: 'electronicchecknotification',
    component: ElectronicCheckNotificationComponent
  },
  {
    path: 'productsforsale',
    component: ProductsForSaleComponent
  },
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'cashieropen',
    component: CashierOpenComponent
  },
  {
    path: 'discountaddsetup',
    component: DiscountAddComponent
  },
  {
    path: 'discountconfig',
    component: DiscountConfigComponent
  },
  {
    path: 'discounttoproduct',
    component: DiscountToProductComponent
  },
  {
    path: 'discountlist',
    component: DiscountsListComponent
  },
   {
    path:'accounts',
    component: AccountsComponent
  },
  {
    path:'cashinout',
    component: CashInOutComponent
  },
  {
    path:'clientlist',
    component: ClientListComponent
  },
  {
    path:'categorylist',
    component: CategoryListComponent
  },
  {
    path:'productlist',
    component: ProductListComponent
  },
  {
    path:'notifications',
    component: NotificationListComponent
  },
  {
    path:'cashclose',
    component: CashierCloseComponent
  },
  {
    path:'discountlisttable',
    component: DiscountListTableComponent
  },
  {
    path:'annulment',
    component: AnnulmentComponent
  },
  {
    path:'forgotpassword',
    component:ForgotPasswordComponent
  },
  {
    path:'userpin',
    component: UserPinComponent
  },
  {
    path: 'check',
    component: CheckComponent
  },
  {
    path: 'internalcontrol',
    component: InternalControlComponent
  },
  {
    path:'checkdetail',
    component:CheckDetailComponent
  },
  {
    path:'userlist',
    component: UserListComponent
  },
  {
    path:'user',
    component: UserComponent
  },
  {
    path:'forgotpin',
    component: ForgotPinComponent
  },
  {
    path:'setupready',
    component: SetupReadyComponent
  },
  { path: 'report', loadChildren: './components/reports/report/report.module#ReportPageModule' },
  {
    path:'reportprincipal',
    component: ReportPrincipalComponent
  },
  {
    path:'reportuser',
    component:ReportUserComponent
  }

    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
