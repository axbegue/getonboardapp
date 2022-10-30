import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models';
import { CategoryBackendService } from 'src/app/services/category-backend.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public categories: Category[] = [];

  constructor(private backend: CategoryBackendService) { }

  ngOnInit(): void {
    this.backend.search().subscribe({
      next: response => {
        this.categories = response.data;
      }
    })
  }

}
