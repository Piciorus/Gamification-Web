import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmActionModalComponent } from './confirm-action-modal.component';

describe('ConfirmActionModalComponent', () => {
  let component: ConfirmActionModalComponent;
  let fixture: ComponentFixture<ConfirmActionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmActionModalComponent]
    });
    fixture = TestBed.createComponent(ConfirmActionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
