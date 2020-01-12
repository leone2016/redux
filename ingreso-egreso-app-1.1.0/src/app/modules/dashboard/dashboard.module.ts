import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UtilsModule} from '../utils/utils.module';
import {MaterialImportsModule} from '../imports/material-imports.module';
import {RouterModule} from '@angular/router';
import {DASHBOARD_ROUTES} from './dashboard.routing';
import {DemoComponent} from './components/demo/demo.component';
import {DemoDialogComponent} from './components/demo/demo-dialog/demo-dialog.component';


@NgModule({
  declarations: [DemoComponent, DemoDialogComponent],
  imports: [
    MaterialImportsModule,
    UtilsModule,
    CommonModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
  ],
  entryComponents: [DemoDialogComponent]
})
export class DashboardModule {
}
