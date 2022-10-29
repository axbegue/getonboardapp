import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models';
import { CategoryBackendService } from 'src/app/services/category-backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
