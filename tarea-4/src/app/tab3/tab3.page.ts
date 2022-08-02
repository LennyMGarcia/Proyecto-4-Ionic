import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  Resultado:string;
  Num1:string;
 Num2:string;

 constructor() {}

 Calcular(){
this.Resultado = (parseFloat(this.Num1) + parseFloat(this.Num2)).toString();

}
}
