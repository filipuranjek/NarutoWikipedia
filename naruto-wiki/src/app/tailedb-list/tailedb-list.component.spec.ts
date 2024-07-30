import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailedbListComponent } from './tailedb-list.component';

describe('TailedbListComponent', () => {
  let component: TailedbListComponent;
  let fixture: ComponentFixture<TailedbListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailedbListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TailedbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
