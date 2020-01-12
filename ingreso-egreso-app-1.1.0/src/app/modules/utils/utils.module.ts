import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';

export let InjectorInstance: Injector;

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [
    TranslateModule
  ]
})
export class UtilsModule {
  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
  }
}
