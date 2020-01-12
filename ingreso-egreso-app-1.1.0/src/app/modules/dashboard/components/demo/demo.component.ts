import {Component, OnInit} from '@angular/core';
import {ApplicationBase} from '../../../utils/base/application.base';
import {DIALOGS} from '../../../utils/settings/general.settings';
import {DialogDataCdt} from '../../../utils/data-transfer-objects/interfaces/dialog-data.cdt';
import {MatDialog} from '@angular/material';
import {DialogSizeEnum} from '../../../utils/enums/dialog-size.enum';
import {DemoDialogComponent} from './demo-dialog/demo-dialog.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent extends ApplicationBase implements OnInit {
  public messages: any;
  constructor(
    private _matDialog: MatDialog
  ) {
    super();
  }

  ngOnInit() {
    this.translateService.get('genericButtons').subscribe((messages: any) => {
      this.messages = messages;
    });
  }

  public invokeSpinner(): void {
    this.spinnerLibrary.start();
    setTimeout(() => this.spinnerLibrary.stop(), 1000);
  }

  public openDemoDialog(dialogData: DialogDataCdt): void {
    const dialogSettings = DIALOGS.setInitParams(DialogSizeEnum.w80, dialogData);
    const dialogRef = this._matDialog.open(DemoDialogComponent, dialogSettings);
    dialogRef.afterClosed().subscribe((result: any) => {
      if (!result) {
        return;
      }
    });
  }

  public invokeToaster(): void {
    this.alertifyLibrary.success('Exito');
    this.alertifyLibrary.error('Error');
  }

  public invokeAlert(): void {
    this.alertifyLibrary.alert('Alerta', 'Mesaje alerta', () => {
      this.invokeToaster();
    });
  }

  public invokeConfirm(): void {
    this.alertifyLibrary.confirm('Confirmacion', 'Mesaje confirmacion', () => {
      this.alertifyLibrary.success('Accion ok');
    }, () => {
      this.alertifyLibrary.error('Accion cancel');
    });
  }

}
