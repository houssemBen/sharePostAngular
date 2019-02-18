import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweeterModalComponent } from './tweeter-modal.component';

describe('TweeterModalComponent', () => {
  let component: TweeterModalComponent;
  let fixture: ComponentFixture<TweeterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweeterModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweeterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
