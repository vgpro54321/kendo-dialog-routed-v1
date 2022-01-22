import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoDialogWrapperComponent } from './kendo-dialog-wrapper.component';

describe('KendoDialogWrapperComponent', () => {
  let component: KendoDialogWrapperComponent;
  let fixture: ComponentFixture<KendoDialogWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendoDialogWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoDialogWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
