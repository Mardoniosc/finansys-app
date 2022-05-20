import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/shared/models/categoria.model';
import { CategoriaService } from 'src/app/shared/services/system/categoria.service';

@Component({
  selector: 'app-mob-category-list',
  templateUrl: './mob-category-list.component.html',
  styleUrls: ['./mob-category-list.component.scss']
})
export class MobCategoryListComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.carregaCategorias();
  }


  private carregaCategorias() : void {
    this.categoriaService.getAll().subscribe(
      (data) => this.categorias = data,
      err => console.error(err)
    )
  }

}
