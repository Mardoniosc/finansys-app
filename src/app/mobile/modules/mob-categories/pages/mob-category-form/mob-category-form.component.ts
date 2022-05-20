import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs';
import { Categoria } from 'src/app/shared/models/categoria.model';
import { AppRotas } from 'src/app/shared/models/enums/core/AppRoutes';
import { CategoriaService } from 'src/app/shared/services/system/categoria.service';

@Component({
  selector: 'app-mob-category-form',
  templateUrl: './mob-category-form.component.html',
  styleUrls: ['./mob-category-form.component.scss'],
})
export class MobCategoryFormComponent implements OnInit, AfterContentChecked {
  currentAction: string = '';
  categoryForm!: FormGroup;
  pageTitle: string = '';
  serverErrorMessages: string[] = [];
  submitTingForm: boolean = false;
  category: Categoria = new Categoria();

  constructor(
    private toastr: ToastrService,
    private categoryService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildCategoryForm();
    this.setCurrentAction();
    this.loadCategory();
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  submitForm() {

    if (this.currentAction === 'new') {
      this.createCategory();
    } else {
      this.updateCategory();
    }
  }

  // PRIVATE METHODS

  private setCurrentAction() {
    if (this.route.snapshot.url[0].path === 'new') {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }

  private buildCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(2)]],
      descricao: [null],
    });
  }

  private loadCategory() {
    if (this.currentAction === 'edit') {
      this.route.paramMap
        .pipe(
          switchMap((parms) =>
            this.categoryService.getById(Number(parms.get('id')))
          )
        )
        .subscribe(
          (data) => {
            this.category = data;
            this.categoryForm.patchValue(this.category);
          },
          (err) => console.error('Erro ao carregar a categoria', err)
        );
    }
  }

  private setPageTitle() {
    if (this.currentAction === 'new') {
      this.pageTitle = 'Cadastro de Nova Categoria';
    } else {
      const categoryName = this.category.nome || '';
      this.pageTitle = 'Editando categoria: ' + categoryName;
    }
  }

  private createCategory() {
    const category: Categoria = Object.assign(
      new Categoria(),
      this.categoryForm.value
    );

    this.categoryService.create(category).subscribe(
      (category) => this.actionForSuccess(category),
      (err) => this.actionForError(err)
    );
  }

  private updateCategory() {
    const category: Categoria = Object.assign(
      new Categoria(),
      this.categoryForm.value
    );

    this.categoryService.update(category).subscribe(
      (category) => this.actionForSuccess(category),
      (err) => this.actionForError(err)
    );
  }

  private actionForSuccess(category: Categoria) {
    this.toastr.success('Solicitação processada com sucesso!');
    this.router
    .navigateByUrl(AppRotas.CATEGORY, { skipLocationChange: true })
    .then(() => this.router.navigate([AppRotas.MOBILE, AppRotas.CATEGORY, category.id, 'edit']));
  }

  private actionForError(err: any) {
    this.toastr.error('Ocorreu um erro ao processar a sua solicitação!');

    if (err.status === 422) {
      this.serverErrorMessages = JSON.parse(err._body).erros;
    } else {
      this.serverErrorMessages = [
        'Falha na comunicação com o servidor. Favor tente mais tarde!',
      ];
    }
  }
}
