import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/shared/models/categoria.model';
import { AppRotas } from 'src/app/shared/models/enums/core/AppRoutes';
import { CategoriaService } from 'src/app/shared/services/system/categoria.service';

@Component({
  selector: 'app-mob-confirm-del',
  templateUrl: './mob-confirm-del.component.html',
  styleUrls: ['./mob-confirm-del.component.scss'],
})
export class MobConfirmDelComponent implements OnInit {
  id: number = 0;
  categoriaNome: string | undefined = '';

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.url[0].path);
    this.carregaCategoria();
  }

  deleteCategory() {
    this.categoriaService.delete(this.id).subscribe(
      (data) => {
        this.toastr.success('Categoria excluida com sucesso!');
        this.router.navigate([AppRotas.MOBILE, AppRotas.CATEGORY]);
      },
      (err) => this.toastr.error(err.error.message, "Erro " + err.error.status)
    );
  }

  carregaCategoria(): void {
    this.categoriaService.getById(this.id).subscribe(
      (data) => (this.categoriaNome = data.nome),
      (err) => this.toastr.error('Erro ao carregar a categoria!')
    );
  }
}
