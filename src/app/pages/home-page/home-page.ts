import { Component } from '@angular/core';
import {Navbar} from '../../components/navbar/navbar';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [
    Navbar,
    NgOptimizedImage
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
