import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoHandlerComponent } from './photo-handler.component';

describe('PhotoHandlerComponent', () => {
  let component: PhotoHandlerComponent;
  let fixture: ComponentFixture<PhotoHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
