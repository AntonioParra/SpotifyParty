import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearTextComponent } from './year-text-component';

describe('YearTextComponent', () => {
  let component: YearTextComponent;
  let fixture: ComponentFixture<YearTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
