import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionsLayout } from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-dialog-content1',
  templateUrl: './dialog-content1.component.html',
  styleUrls: ['./dialog-content1.component.css']
})
export class DialogContent1Component implements OnInit {
  public actionsLayout: ActionsLayout = "normal";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  public opened = true;
  //public actionsLayout: ActionsLayout = "normal";

  public onDialogClose() {
    this.router.navigate(['/'], {
      relativeTo: this.route.parent,
               //skipLocationChange: true,
      });

    this.opened = false;
  }

  public onDeleteData() {
    //alert("Data deleted.");
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }
}
