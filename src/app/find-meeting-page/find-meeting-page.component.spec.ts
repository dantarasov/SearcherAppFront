import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMeetingPageComponent } from './find-meeting-page.component';

describe('FindMeetingPageComponent', () => {
  let component: FindMeetingPageComponent;
  let fixture: ComponentFixture<FindMeetingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindMeetingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindMeetingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
