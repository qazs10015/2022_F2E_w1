import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBoard2Component } from './story-board2.component';

describe('StoryBoard2Component', () => {
  let component: StoryBoard2Component;
  let fixture: ComponentFixture<StoryBoard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryBoard2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryBoard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
