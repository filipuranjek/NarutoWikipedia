import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkgkListComponent } from './kkgk-list.component';

describe('KkgkListComponent', () => {
  let component: KkgkListComponent;
  let fixture: ComponentFixture<KkgkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KkgkListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KkgkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
