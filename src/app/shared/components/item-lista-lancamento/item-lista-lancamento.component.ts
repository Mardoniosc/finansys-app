import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-lista-lancamento',
  templateUrl: './item-lista-lancamento.component.html',
  styleUrls: ['./item-lista-lancamento.component.scss']
})
export class ItemListaLancamentoComponent implements OnInit {

  @Input('titulo')
  public titulo: string = '';

  @Input('posicao')
  public posicao: string = '';

  @Input('iconecirculo')
  public iconecirculo: string = '';

  @Input('subtitulo')
  public subtitulo: boolean = false;

  @Input('subtitulotexto')
  public subtitulotexto: string = '';

  @Input('categoria')
  public categoria: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
