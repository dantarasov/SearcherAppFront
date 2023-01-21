import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSearcherPageComponent } from './find-searcher-page.component';

describe('FindSearcherPageComponent', () => {
  let component: FindSearcherPageComponent;
  let fixture: ComponentFixture<FindSearcherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindSearcherPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindSearcherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
