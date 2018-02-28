import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rotas-curso-detalhe',
  templateUrl: './rotas-curso-detalhe.component.html',
  styleUrls: ['./rotas-curso-detalhe.component.css']
})
export class RotasCursoDetalheComponent implements OnInit {

  id: string;

  //ActivatedRoute é a classe necessária para obter os valores
  //passsados por parametros por outras rotas
  constructor(private route: ActivatedRoute) { 
  }
  
  ngOnInit() {
    this.id = this.route.snapshot.params['id']
  }

}
