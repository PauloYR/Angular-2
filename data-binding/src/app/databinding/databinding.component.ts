import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  url :string = 'http//:Urls.com';
  cursoAngular :boolean = true;
  urlImg :string = 'http://lorempixel.com/400/200/';
  valorAtual :string = "";
  valorSalvo :string = "";
  isMouseOuver :boolean = false;
  constructor() { }

  ngOnInit() {
  }
  getValor(){
    return 1 ;
  }
  getCurtiCurso(){
    return true;
  }
  botaoClicado(){
    alert('Botão Clicado!');
  }
  onKeyUp(evento :KeyboardEvent){
    this.valorAtual = (<HTMLInputElement> evento.target).value;
  }
  salvarValor(valor){
    this.valorSalvo = valor;
  }

  mouseOuverOut(){
    this.isMouseOuver = !this.isMouseOuver;
  }
}
