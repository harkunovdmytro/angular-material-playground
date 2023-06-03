import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unsubscriber } from './unsubscriber.component';

describe('UnsubscriberComponent', () => {
  let component: Unsubscriber;
  let fixture: ComponentFixture<Unsubscriber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Unsubscriber ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Unsubscriber);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
