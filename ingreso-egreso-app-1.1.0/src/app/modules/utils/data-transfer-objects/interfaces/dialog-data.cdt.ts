import {ActionTypeEnum} from '../../enums/action-type.enum';

export interface DialogDataCdt {
  title?: string;
  subTitle?: string;
  data?: any;
  action: ActionTypeEnum | string;
  additionalInfo?: any;
  icon?: any;
}
