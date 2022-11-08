import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBoard5Component } from './story-board5.component';

describe('StoryBoard5Component', () => {
  let component: StoryBoard5Component;
  let fixture: ComponentFixture<StoryBoard5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryBoard5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryBoard5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
