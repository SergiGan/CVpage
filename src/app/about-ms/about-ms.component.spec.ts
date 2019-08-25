import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMSComponent } from './about-ms.component';

describe('AboutMSComponent', () => {
  let component: AboutMSComponent;
  let fixture: ComponentFixture<AboutMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
