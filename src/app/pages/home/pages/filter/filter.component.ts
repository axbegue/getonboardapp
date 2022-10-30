import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { forkJoin, take } from 'rxjs';
import { Category } from 'src/app/models';
import { CategoryBackendService } from 'src/app/services/category-backend.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  public filtersFrom = new FormGroup({
    category: new FormControl(''),
    company: new FormControl(''),
  });
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
