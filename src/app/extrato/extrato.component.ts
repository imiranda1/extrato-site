import { ItemExtrato } from './item-extrato';
import { ExtratoService } from './extrato.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})


export class ExtratoComponent implements OnInit {

  constructor(private extratoService: ExtratoService) { }


    displayedColumns: string[] = ['dataLancamento', 'descricao', 'numero', 'situacao', 'dataConfirmacao', 'dadosBancarios', 'valorFinal'];
    lancamentos: ItemExtrato[];

   ngOnInit(){
    this.extratoService.listar().subscribe(dados => this.lancamentos = dados);
   }

}
