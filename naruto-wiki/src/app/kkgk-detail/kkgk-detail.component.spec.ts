import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkgkDetailComponent } from './kkgk-detail.component';

describe('KkgkDetailComponent', () => {
  let component: KkgkDetailComponent;
  let fixture: ComponentFixture<KkgkDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KkgkDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KkgkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
