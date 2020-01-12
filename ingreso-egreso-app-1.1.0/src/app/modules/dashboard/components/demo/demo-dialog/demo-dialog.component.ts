import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogDataCdt} from '../../../../utils/data-transfer-objects/interfaces/dialog-data.cdt';

@Component({
  selector: 'app-demo-dialog',
  templateUrl: './demo-dialog.component.html',
  styleUrls: ['./demo-dialog.component.scss']
})
export class DemoDialogComponent implements OnInit {

  constructor(
    private _dialogRef: MatDialogRef<DemoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public demoDialogData: DialogDataCdt
  ) {
  }

  ngOnInit() {
  }

  public close(data?: any): void {
    this._dialogRef.close(data);
  }
}
