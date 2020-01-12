import {DialogSizeEnum} from '../enums/dialog-size.enum';

export const SPINNER_DEFAULT_MESSAGES = {
  loading: 'Loading...'
};

export const TRANSLATE_SETTINGS = {
  defaultLang: 'es'
};

export const ALERTIFY_DEFAULT_MESSAGES = {
  confirmMassageBoxTitle: 'Confirmación',
  alertMessageBoxTile: 'Alerta',
  successNotifier: 'Exito',
  errorNotifier: 'Error',
  warningNotifier: 'Alerta',
  notifyNotifier: 'Notificación',
  messageNotifier: 'Información',
  cancelMessageBoxLabel: 'Cancelar',
  okMessageBoxLabel: 'OK'
};

export const DIALOGS = {
  sizeDialog: {
    [DialogSizeEnum.small]: {
      width: '400px',
      height: 'auto'
    },
    [DialogSizeEnum.medium]: {
      width: '750px',
      height: 'auto'
    },
    [DialogSizeEnum.w80]: {
      width: '80%',
      height: 'auto'
    },
    [DialogSizeEnum.w90]: {
      width: '90%',
      height: 'auto'
    },
    [DialogSizeEnum.fullScreen]: {
      width: '100%',
      height: '100%'
    }
  },
  setInitParams: (size: string, data: any = {}, panelClass: string = '', autoFocus: boolean = false): any => {
    DIALOGS['sizeDialog'][size].maxWidth = '100vw';
    DIALOGS['sizeDialog'][size].data = data;
    DIALOGS['sizeDialog'][size].panelClass = panelClass;
    DIALOGS['sizeDialog'][size].autoFocus = autoFocus;
    DIALOGS['sizeDialog'][size].maxHeight = '100vh';
    return DIALOGS['sizeDialog'][size];
  },
  setPositions: (dialog: any, position: any = {top: '6%'}): any => {
    dialog.position = position;
    return dialog;
  }
};



