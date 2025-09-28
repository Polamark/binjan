import {Component} from '@angular/core';
import {Navbar} from '../../components/navbar/navbar';
import {NgOptimizedImage} from '@angular/common';
import {Jumbotron} from './jumbotron/jumbotron';
import {HelpSection} from './help-section/help-section';
import {WorkSection} from './work-section/work-section';
import {List} from '../../components/navbar/list/list';
import {ActivatedRoute} from '@angular/router';
import {ExperienceSection} from './experience-section/experience-section';
import {NotesSection} from './notes-section/notes-section';

@Component({
  selector: 'app-home-page',
  imports: [
    Navbar,
    NgOptimizedImage,
    Jumbotron,
    HelpSection,
    WorkSection,
    List,
    ExperienceSection,
    NotesSection
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((data) => {
      if (data) {
        document.getElementById(data)?.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});
      }
    })
  }
}
