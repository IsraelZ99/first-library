import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-israel-library',
  template: `
    <p>
      israel-library works! Te deseo un excelente hola desde <br>
      mi primeria libreria creada, para que la puedas utilizar
    </p>
  `,
  styles: []
})
export class IsraelLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
