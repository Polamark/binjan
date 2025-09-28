import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesSection } from './notes-section';

describe('NotesSection', () => {
  let component: NotesSection;
  let fixture: ComponentFixture<NotesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
