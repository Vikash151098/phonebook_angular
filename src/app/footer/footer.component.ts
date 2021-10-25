import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  // component with inline template
  template: `<div class="text-center">
  <hr>
  <app-menu></app-menu>
  <p>Copyright &copy; 2021 Phone Book App </p>
  </div>
  `,
  // component with inline css
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
