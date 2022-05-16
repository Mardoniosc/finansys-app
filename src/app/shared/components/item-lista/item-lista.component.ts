import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-lista',
  templateUrl: './item-lista.component.html',
  styleUrls: ['./item-lista.component.scss']
})
export class ItemListaComponent implements OnInit {

  @Input('titulo')
  public titulo: string = '';

  @Input('valor')
  public valor: string = '';

  @Input('tipo')
  public tipo: string = '';

  @Input('posicao')
  public posicao: string = '';

  @Input('iconecirculo')
  public iconecirculo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
