import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaItmesComponent } from './media-itmes.component';

describe('MediaItmesComponent', () => {
  let component: MediaItmesComponent;
  let fixture: ComponentFixture<MediaItmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaItmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaItmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
