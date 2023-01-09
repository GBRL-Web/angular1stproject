import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappybuttonComponent } from './happybutton.component';

describe('HappybuttonComponent', () => {
  let component: HappybuttonComponent;
  let fixture: ComponentFixture<HappybuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappybuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappybuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
