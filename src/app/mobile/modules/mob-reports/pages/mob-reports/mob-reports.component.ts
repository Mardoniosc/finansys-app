import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mob-reports',
  templateUrl: './mob-reports.component.html',
  styleUrls: ['./mob-reports.component.scss']
})
export class MobReportsComponent implements OnInit {

  receita = "R$ 10.679,00";
  despesa = "R$ 6764,22";
  saldo = "R$ 3.879,22";

  relatorioGerado = false;

  constructor() { }

  ngOnInit(): void {
  }

  gerarRelatorio() {
    this.relatorioGerado = true;
  }

}
