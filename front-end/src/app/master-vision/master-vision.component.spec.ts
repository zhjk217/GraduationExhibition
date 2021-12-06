import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterVisionComponent } from './master-vision.component';

describe('MasterVisionComponent', () => {
  let component: MasterVisionComponent;
  let fixture: ComponentFixture<MasterVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterVisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
