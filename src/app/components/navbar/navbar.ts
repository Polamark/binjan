import { Component } from '@angular/core';
import {List} from './list/list';

@Component({
  selector: 'app-navbar',
  imports: [
    List
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
