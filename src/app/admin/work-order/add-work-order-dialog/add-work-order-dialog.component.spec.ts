import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkOrderDialogComponent } from './add-work-order-dialog.component';

describe('AddWorkOrderDialogComponent', () => {
  let component: AddWorkOrderDialogComponent;
  let fixture: ComponentFixture<AddWorkOrderDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWorkOrderDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
