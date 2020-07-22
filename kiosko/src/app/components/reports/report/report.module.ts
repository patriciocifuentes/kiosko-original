import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { IonicModule } from '@ionic/angular';

import { ReportPage } from './report.page';

const routes: Routes = [
  {
    path: '',
    component: ReportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2GoogleChartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportPage]
})
export class ReportPageModule {}
