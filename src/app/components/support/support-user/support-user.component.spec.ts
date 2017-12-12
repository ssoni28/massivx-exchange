import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportUserComponent } from './support-user.component';

describe('SupportUserComponent', () => {
  let component: SupportUserComponent;
  let fixture: ComponentFixture<SupportUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
