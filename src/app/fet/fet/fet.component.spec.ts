import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetComponent } from './fet.component';

describe('FetComponent', () => {
  let component: FetComponent;
  let fixture: ComponentFixture<FetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
