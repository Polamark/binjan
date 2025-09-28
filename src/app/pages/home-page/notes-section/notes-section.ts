import {Component} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-notes-section',
  imports: [
    NgClass
  ],
  templateUrl: './notes-section.html',
  styleUrl: './notes-section.css'
})
export class NotesSection {
  private generateNotes = 15
  public notes: number[] = [];
  public highlightedNote: number = 1;

  constructor() {
    for (let i = 0; i < this.generateNotes; i++) {
      this.notes.push(i);
    }
  }

  onScroll() {
    const carousel = document.getElementById("notesCarousel")
    const children = carousel?.children
    if (carousel && children) {
      const screenCenter = carousel.getBoundingClientRect().left + carousel.getBoundingClientRect().width / 2;
      for (var child of children) {
        if (Math.abs(child.getBoundingClientRect().left + child.getBoundingClientRect().width / 2 - screenCenter) <= 200) {
          this.highlightedNote = parseInt(child.id) ?? 1
        }
      }
    }
  }

  scrollRight() {
    const carousel = document.getElementById("notesCarousel")
    const children = carousel?.children

    if (carousel && children) {
      this.highlightedNote += 1;
      if (this.highlightedNote > this.generateNotes - 2) {
        this.highlightedNote = 1
      }
      for (let child of children) {
        if (parseInt(child.id) == this.highlightedNote) {
          child.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'})
        }
      }
    }
  }

  scrollLeft() {
    const carousel = document.getElementById("notesCarousel")
    const children = carousel?.children

    if (carousel && children) {
      this.highlightedNote -= 1;
      if (this.highlightedNote < 1) {
        this.highlightedNote = this.generateNotes - 2
      }
      for (let child of children) {
        if (parseInt(child.id) == this.highlightedNote) {
          child.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'})
        }
      }
    }
  }

}
