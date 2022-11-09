import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBoard7Component } from './story-board7.component';

describe('StoryBoard7Component', () => {
  let component: StoryBoard7Component;
  let fixture: ComponentFixture<StoryBoard7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryBoard7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryBoard7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
