import {AlertifyLibrary} from '../libraries/alertify.library';

import * as moment from 'moment';
import {SpinnerLibrary} from '../libraries/spinner.library';
import {TranslateService} from '@ngx-translate/core';
import {TRANSLATE_SETTINGS} from '../settings/general.settings';
import {FunctionsGeneric} from '../generics/functions.generic';
import {InjectorInstance} from '../utils.module';
import {HttpClient} from '@angular/common/http';

export class ApplicationBase {
  protected lang: string;
  protected translateService: TranslateService;
  protected moment: any;
  protected alertifyLibrary: AlertifyLibrary;
  protected spinnerLibrary: SpinnerLibrary;
  protected decodedToken: any;

  constructor() {
    this.initializeVariables();
    this.configureLang();
  }

  private initializeVariables() {
    this.lang = FunctionsGeneric.getLang();
    this.moment = moment;
    this.alertifyLibrary = AlertifyLibrary.instance;
    this.spinnerLibrary = SpinnerLibrary.instance;
    this.decodedToken = FunctionsGeneric.getDecodedToken();

  }

  private configureLang() {
    this.translateService = InjectorInstance.get<TranslateService>(TranslateService);
    this.translateService.setDefaultLang(TRANSLATE_SETTINGS.defaultLang);
    this.translateService.use(this.lang);
  }
}
