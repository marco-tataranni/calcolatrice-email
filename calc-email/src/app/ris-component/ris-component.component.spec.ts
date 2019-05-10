import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisComponentComponent } from './ris-component.component';

describe('RisComponentComponent', () => {
  let component: RisComponentComponent;
  let fixture: ComponentFixture<RisComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
