import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSingleComponent } from './photo-single.component';

describe('PhotoSingleComponent', () => {
  let component: PhotoSingleComponent;
  let fixture: ComponentFixture<PhotoSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
