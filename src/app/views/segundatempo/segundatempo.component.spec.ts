import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundatempoComponent } from './segundatempo.component';

describe('SegundatempoComponent', () => {
  let component: SegundatempoComponent;
  let fixture: ComponentFixture<SegundatempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundatempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundatempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
