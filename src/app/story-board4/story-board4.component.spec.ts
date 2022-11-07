import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBoard4Component } from './story-board4.component';

describe('StoryBoard4Component', () => {
  let component: StoryBoard4Component;
  let fixture: ComponentFixture<StoryBoard4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryBoard4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryBoard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
