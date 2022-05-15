import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-secundary',
  templateUrl: './button-secundary.component.html',
  styleUrls: ['./button-secundary.component.scss']
})
export class ButtonSecundaryComponent implements OnInit {

  @Input('titulo')
  public titulo: string = '';

  @Input('disabled')
  public disabled: boolean = false;

  @Input('altura')
  public altura: string = `48px`;

  @Input('largura')
  public largura: string = `342px`;

  public estilo = {};

  constructor() {}

  ngOnInit(): void {
    this.estilo = {
      width: this.largura,
      height: this.altura,
    };
  }
}
