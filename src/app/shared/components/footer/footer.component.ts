import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('svgEl') svgEl!: ElementRef;

  @Input('menu')
  public ativarMenu: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
