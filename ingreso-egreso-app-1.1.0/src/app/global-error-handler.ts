import {ErrorHandler, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApplicationBase} from './modules/utils/base/application.base';
import {AlertifyLibrary} from './modules/utils/libraries/alertify.library';

@Injectable()
export class GlobalErrorHandler extends ApplicationBase implements ErrorHandler {
  private _strategyErrorManagement: any;
  private _defaultErrorMessages: any;

  constructor() {
    super();
    this.getDefaultErrorMessages().subscribe();
    this.initValues();
  }

  private initValues() {
    this._strategyErrorManagement = {
      ['400']: (message) => {
        AlertifyLibrary.instance.error(message);
      },
      ['500']: () => {
        AlertifyLibrary.instance.error(this._defaultErrorMessages['500']);
      },
      ['404']: () => {
        AlertifyLibrary.instance.error();
      }
    };
  }

  private getDefaultErrorMessages() {
    return new Observable(observer => {
      this.translateService.get('globalErrorHandlerMessages').subscribe((errorMessages: any) => {
        this._defaultErrorMessages = errorMessages;
        observer.next(errorMessages);
      });
    });
  }


  handleError(error: any) {
    console.error(error);
    if (!error || !error.error || !error.error.code) {
      return;
    }
    this._strategyErrorManagement[error.error.code](error.error.message);
  }
}
