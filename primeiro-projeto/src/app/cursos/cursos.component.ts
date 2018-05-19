import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  portifolio :string;
  cursos :string[] ;
  constructor(private CursosService :CursosService) { 
    this.portifolio = "http://yuri.ntectreinamentos.com.br/portifolio/"
    /*for (let i = 0; i < this.cursos.length; i++) {
      let cursos = this.cursos[i];  
    }*/
    
    //var servico = new CursosService;
    this.cursos = this.CursosService.getCursos();
  }

  ngOnInit() {
  }

}
