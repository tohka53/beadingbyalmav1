import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HetComponent } from './het.component';

describe('HetComponent', () => {
  let component: HetComponent;
  let fixture: ComponentFixture<HetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
