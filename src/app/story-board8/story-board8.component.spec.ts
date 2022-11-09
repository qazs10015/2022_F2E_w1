import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBoard8Component } from './story-board8.component';

describe('StoryBoard8Component', () => {
  let component: StoryBoard8Component;
  let fixture: ComponentFixture<StoryBoard8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryBoard8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryBoard8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
