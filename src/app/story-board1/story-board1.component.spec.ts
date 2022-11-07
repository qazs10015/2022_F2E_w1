import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBoard1Component } from './story-board1.component';

describe('StoryBoard1Component', () => {
  let component: StoryBoard1Component;
  let fixture: ComponentFixture<StoryBoard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryBoard1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryBoard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
