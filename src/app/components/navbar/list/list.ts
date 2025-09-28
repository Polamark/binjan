import {Component, input} from '@angular/core';
import {NgClass} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  vertical = input<boolean>(false)
  public selected = ""
  public listItems = ["services", "works", "notes", "experience"]

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe(data => {
      this.selected = data ?? "services"
    })
  }

}
