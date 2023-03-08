import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCompanysComponent } from './featured-companys.component';

describe('FeaturedCompanysComponent', () => {
  let component: FeaturedCompanysComponent;
  let fixture: ComponentFixture<FeaturedCompanysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedCompanysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedCompanysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
