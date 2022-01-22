import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kendo-dialog-wrapper',
  templateUrl: './kendo-dialog-wrapper.component.html',
  styleUrls: ['./kendo-dialog-wrapper.component.css']
})
export class KendoDialogWrapperComponent {

  constructor(
    //private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    //this.dispatchDialog();
  }

  openDialog(): void {
    this.router.navigate(['screen1'], {
      relativeTo: this.route,
               //skipLocationChange: true,
      });
  }
  // dispatchDialog(): void {
  //   const dialogRef = this.dialog.open(this.dialogTemplate, {
  //     width: '600px',
  //     disableClose: false,
  //   });

  //   dialogRef
  //     .afterOpened()
  //     .pipe(take(1))
  //     .subscribe(() => {
  //       this.router.navigate(['screen1'], {
  //         relativeTo: this.route,
  //         //skipLocationChange: true,
  //       });
  //     });

  //   dialogRef
  //     .afterClosed()
  //     .pipe(take(1))
  //     .subscribe(() => {
  //       this.router.navigate(['/']);
  //     });
  // }

}
