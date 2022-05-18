import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppRotas } from 'src/app/shared/models/enums/core/AppRoutes';
import { AppStorage } from 'src/app/shared/models/enums/core/AppStorage';
import { TokenUser } from 'src/app/shared/models/local-user.model';
import { Login } from 'src/app/shared/models/login.model';
import { StorageService } from 'src/app/shared/services';
import { LoginService, UserLoggedService } from 'src/app/shared/services/autenticacao';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private subscriptions: Subscription[] = [];

  login = {} as Login;

  form!: FormGroup;

  localTokenUser = {} as TokenUser;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userLoggedService: UserLoggedService,
    private loginService: LoginService,
    private storageService: StorageService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.criarForm();
    this.verificaUserLogged();
  }

  criarForm(): void {
    this.form = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  verificaUserLogged(): void {
    const logado = this.userLoggedService.userLogged();

    if (logado) {
      this.router.navigate([AppRotas.MOBILE, AppRotas.REPORT]);
    }
  }

  logar(): void {
    if (this.form.invalid) {
      this.toastr.info("Campos de formulário inválidos!");
      return;
    }

    this.login = this.form.value;
    this.subscriptions.push(
      this.loginService.logar(this.login).subscribe(
        (data) => {
          const token = data.headers.get('authorization');
          if (!token) {
            this.toastr.error('Erro ao recuperar token!');
            return;
          }
          this.loginService.successLogin(token);
          this.localTokenUser = this.storageService.getItem(AppStorage.TOKEN_USER);
          this.toastr.success('Login realizado com sucesso!');
          this.carregarDadosUserLoggado();

        },
        (err) => {
          if(err.error) {
            this.toastr.error(JSON.parse(err.error).message, 'Erro '  + JSON.parse(err.error).status);
          }

        }
      )
    );
  }

  carregarDadosUserLoggado(): void {
    this.storageService.setItem(AppStorage.USUARIO, { "usuario": "Mardonio", "status": 1 });
    this.router.navigate([AppRotas.MOBILE, AppRotas.REPORT]);
  }
}
