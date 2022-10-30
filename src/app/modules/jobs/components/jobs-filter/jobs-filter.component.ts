import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { forkJoin, Observable, take } from 'rxjs';
import { Category } from 'src/app/models';
import { CategoryBackendService } from 'src/app/services/category-backend.service';

@Component({
  selector: 'app-jobs-filters',
  templateUrl: './jobs-filter.component.html',
  styleUrls: ['./jobs-filter.component.scss'],
})
export class JobsFilterComponent implements OnInit {
  public filtersFrom = new FormGroup({
    category: new FormControl(''),
    company: new FormControl(''),
  });
  inputFormatter = (entity: Category) => entity ? entity.attributes.name : '';
  public categories: Category[] = [];

  constructor(private categoryServices: CategoryBackendService) {}

  ngOnInit(): void {
    forkJoin();
    this.categoryServices
      .search()
      .pipe(take(1))
      .subscribe((response) => {
        this.categories = response.data;
        console.log(response);
      });
  }
}
