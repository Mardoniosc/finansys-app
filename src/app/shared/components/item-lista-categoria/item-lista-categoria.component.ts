import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-lista-categoria',
  templateUrl: './item-lista-categoria.component.html',
  styleUrls: ['./item-lista-categoria.component.scss']
})
export class ItemListaCategoriaComponent implements OnInit {

  @Input('id')
  public id: number | undefined = 0;

  @Input('titulo')
  public titulo: string | undefined = '';

  @Input('primeiro')
  public primeiro: boolean = false;

  @Input('ultimo')
  public ultimo: boolean = false;

  @Input('subtitulo')
  public subtitulo: boolean = false;

  @Input('subtitulotexto')
  public subtitulotexto: string | undefined  = '';

  constructor() { }

  ngOnInit(): void {
  }

  get routerLinkEdit() : string {
    return "/mobile/category/"+ this.id +"/edit";
  }

  get routerLinkdelete() : string {
    return "/mobile/category/"+ this.id +"/delete";
  }

}
