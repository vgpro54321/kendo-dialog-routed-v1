import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogRef, DialogService } from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-kendo-dialog-wrapper',
  templateUrl: './kendo-dialog-wrapper.component.html',
  styleUrls: ['./kendo-dialog-wrapper.component.css']
})
export class KendoDialogWrapperComponent {
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

  constructor(
    //private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) {}

  ngAfterViewInit(): void {
    //this.dispatchDialog();
  }

  openDialog(): void {

    // const dialog: DialogRef = this.dialogService.open({
    //   title: 'Please confirm',
    //   content: 'Are you sure?',
    //   actions: [
    //       { text: 'No' },
    //       { text: 'Yes', themeColor: 'primary' }
    //   ],
    //   width: 450,
    //   height: 200,
    //   minWidth: 250
    // });

  // });
    let dialogRef = this.dialogService.open({
      title: "Please confirm",
      content: this.dialogTemplate,
      actions: [{ text: "No" }, { text: "Yes", themeColor: "primary" }],
    });


    
  }

  openDialogLegacy(): void {
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
