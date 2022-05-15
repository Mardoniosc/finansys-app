import { Component, Input, OnInit } from '@angular/core';
import { AppCores } from '../../models/enums/core/AppCores';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
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
