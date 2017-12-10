import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassivxComponent } from './massivx.component';

describe('MassivxComponent', () => {
  let component: MassivxComponent;
  let fixture: ComponentFixture<MassivxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassivxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassivxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
