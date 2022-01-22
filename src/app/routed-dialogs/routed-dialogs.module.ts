import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KendoDialogWrapperComponent } from './kendo-dialog-wrapper/kendo-dialog-wrapper.component';
import { RouterModule } from '@angular/router';
import { DialogContent1Component } from './dialog-content1/dialog-content1.component';



@NgModule({
  declarations: [
    KendoDialogWrapperComponent,
    DialogContent1Component
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: KendoDialogWrapperComponent,
        children: [
          {
            path: 'screen1',
            component: DialogContent1Component
          },
          // {
          //   path: 'screen2',
          //   component: Screen2Component,
          // },
          // {
          //   path: 'screen3',
          //   component: Screen3Component,
          // },
        ],
      },
    ]),

  ]
})
export class RoutedDialogsModule { }
