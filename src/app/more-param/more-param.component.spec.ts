import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreParamComponent } from './more-param.component';

describe('MoreParamComponent', () => {
  let component: MoreParamComponent;
  let fixture: ComponentFixture<MoreParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreParamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
