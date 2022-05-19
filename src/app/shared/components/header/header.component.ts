import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRotas } from '../../models/enums/core/AppRoutes';
import { LoginService } from '../../services/autenticacao';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('titulo')
  public titulo: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    this.loginService.logout();
    this.router.navigate([AppRotas.LOGIN]);
  }
}
