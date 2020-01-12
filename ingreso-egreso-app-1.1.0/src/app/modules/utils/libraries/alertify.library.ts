import {ALERTIFY_DEFAULT_MESSAGES} from '../settings/general.settings';

declare var alertify: any;

export class AlertifyLibrary {
  private static _instance: AlertifyLibrary;

  private constructor() {
  }

  static get instance(): AlertifyLibrary {
    if (!this._instance) {
      this._instance = new AlertifyLibrary();
    }
    return this._instance;
  }

  public alert(title: string, message: string, callBack: any) {
    alertify.alert(title, message, callBack);
  }

  confirm(title: string, message: string);
  confirm(title: string, message: string, okCallBack: any): void;
  confirm(title: string, message: string, okCallBack: any, cancelCallBack: any);
  public confirm(title: string, message?: string, okCallBack?: any, cancelCallBack?: any): void {
    if (!title) {
      title = ALERTIFY_DEFAULT_MESSAGES.confirmMassageBoxTitle;
    }
    if (!okCallBack) {
      alertify.confirm(title, message);
    } else if (!cancelCallBack) {
      alertify.confirm(title, message, okCallBack, () => {});
    } else {
      alertify.confirm(title, message, okCallBack, cancelCallBack).set({
        'labels': {ok: ALERTIFY_DEFAULT_MESSAGES.okMessageBoxLabel, cancel: ALERTIFY_DEFAULT_MESSAGES.cancelMessageBoxLabel},
        'reverseButtons': true,
        'closable': false
      });
    }
  }

  public success(message: string = ALERTIFY_DEFAULT_MESSAGES.successNotifier) {
    alertify.success(message);
  }

  public message(message: string = ALERTIFY_DEFAULT_MESSAGES.messageNotifier) {
    alertify.message(message);
  }

  public notify(message: string = ALERTIFY_DEFAULT_MESSAGES.notifyNotifier) {
    alertify.notify(message);
  }

  public error(message: string = ALERTIFY_DEFAULT_MESSAGES.errorNotifier) {
    alertify.error(message);
  }
}
