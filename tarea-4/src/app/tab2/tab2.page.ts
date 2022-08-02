import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public numero=0;

  /*Retorna el valor del indice pasado como un array*/
  counter(i:number) {
    return new Array(i);
  }
  constructor() {}

}
