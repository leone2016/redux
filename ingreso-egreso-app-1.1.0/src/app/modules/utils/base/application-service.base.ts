import {HttpClient, HttpClientModule} from '@angular/common/http';
import * as moment from 'moment';
import {Injector} from '@angular/core';
import {InjectorInstance} from '../utils.module';

export class ApplicationServiceBase {
  protected http: HttpClient;
  protected moment: any;

  constructor() {
    this.http = InjectorInstance.get<HttpClient>(HttpClient);
    this.initializeVariables();
  }

  private initializeVariables() {
    this.moment = moment;
  }
}
