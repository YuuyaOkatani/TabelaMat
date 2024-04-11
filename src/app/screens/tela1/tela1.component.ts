import { Component } from '@angular/core';

@Component({
  selector: 'app-tela1',
  templateUrl: './tela1.component.html',
  styleUrl: './tela1.component.css'
})
export class Tela1Component {
  togglar = false; 
  var1 = 0;
  var2 = 0;
  resultado = ''; 
  condicao = ''
  selected : string =  ''; 

  array = ['∧' , '∨']
  
 
  alerta = true; 
  apertar(){
    this.togglar = !this.togglar;

  }

  

  conjuncao(){

    this.condicao = '∧'
    if(this.var1 == 0 && this.var2 == 0){
      this.resultado = 'F'


    }
    else if (this.var1 == 1 && this.var2 == 0 ){
      this.resultado = 'F'
    }
    else if (this.var1 == 0 && this.var2 ==1){
      this.resultado = 'F'
    }
    else if (this.var1 == 1 && this.var2 == 1){
      this.resultado = 'V'
    }
    else{
      this.alerta = true

    }

  }

  dijuncao(){

    this.condicao = '∨'

    
    
    if (this.var1 == 1 || this.var2 == 1){
      this.resultado = 'V'
    }
    else{
      this.resultado = 'F'

    }
  }


  

}
