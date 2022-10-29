import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
