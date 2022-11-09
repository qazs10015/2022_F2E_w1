import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBoard9Component } from './story-board9.component';

describe('StoryBoard9Component', () => {
  let component: StoryBoard9Component;
  let fixture: ComponentFixture<StoryBoard9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryBoard9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryBoard9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
