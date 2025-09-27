import { Component } from '@angular/core';
import {Navbar} from '../../components/navbar/navbar';
import {NgOptimizedImage} from '@angular/common';
import {Jumbotron} from './jumbotron/jumbotron';
import {HelpSection} from './help-section/help-section';
import {WorkSection} from './work-section/work-section';

@Component({
  selector: 'app-home-page',
  imports: [
    Navbar,
    NgOptimizedImage,
    Jumbotron,
    HelpSection,
    WorkSection
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
