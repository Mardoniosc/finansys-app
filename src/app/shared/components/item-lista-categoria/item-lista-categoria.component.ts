import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-lista-categoria',
  templateUrl: './item-lista-categoria.component.html',
  styleUrls: ['./item-lista-categoria.component.scss']
})
export class ItemListaCategoriaComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
