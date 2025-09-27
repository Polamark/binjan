import { Component } from '@angular/core';
import {Navbar} from "../../../components/navbar/navbar";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-jumbotron',
    imports: [
        Navbar,
        NgOptimizedImage
    ],
  templateUrl: './jumbotron.html',
  styleUrl: './jumbotron.css'
})
export class Jumbotron {

}
