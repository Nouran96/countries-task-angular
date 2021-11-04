import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-spinner-in-overlay',
  templateUrl: './spinner-in-overlay.component.html',
  styleUrls: ['./spinner-in-overlay.component.scss'],
})
export class SpinnerInOverlayComponent implements OnInit {
  dialogRef: MatDialogRef<SpinnerComponent>;

  constructor(
    private dialog: MatDialog,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingService.loaderVisibilityChange.subscribe((value) => {
      if (value) {
        this.showProgressSpinner();
      } else {
        this.dialogRef?.close();
      }
    });
  }

  ngOnDestroy(): void {
    this.loadingService.loaderVisibilityChange.unsubscribe();
  }

  showProgressSpinner() {
    this.dialogRef = this.dialog.open(SpinnerComponent, {
      panelClass: 'custom-spinner-dialog',
      disableClose: true,
    });
  }
}
