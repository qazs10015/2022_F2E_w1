import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBoard6Component } from './story-board6.component';

describe('StoryBoard6Component', () => {
  let component: StoryBoard6Component;
  let fixture: ComponentFixture<StoryBoard6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryBoard6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryBoard6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
