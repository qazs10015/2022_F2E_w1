import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBoard3Component } from './story-board3.component';

describe('StoryBoard3Component', () => {
  let component: StoryBoard3Component;
  let fixture: ComponentFixture<StoryBoard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryBoard3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryBoard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
