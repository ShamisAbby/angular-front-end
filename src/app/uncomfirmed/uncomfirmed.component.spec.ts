import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncomfirmedComponent } from './uncomfirmed.component';

describe('UncomfirmedComponent', () => {
  let component: UncomfirmedComponent;
  let fixture: ComponentFixture<UncomfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncomfirmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UncomfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
