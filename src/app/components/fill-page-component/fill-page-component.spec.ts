import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillPageComponent } from './fill-page-component';

describe('FillPageComponent', () => {
  let component: FillPageComponent;
  let fixture: ComponentFixture<FillPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FillPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
