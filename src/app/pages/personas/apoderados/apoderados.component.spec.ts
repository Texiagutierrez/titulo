import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoderadosComponent } from './apoderados.component';

describe('ApoderadosComponent', () => {
  let component: ApoderadosComponent;
  let fixture: ComponentFixture<ApoderadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoderadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoderadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
