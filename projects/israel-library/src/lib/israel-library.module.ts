import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { IsraelLibraryComponent } from './israel-library.component';

@NgModule({
  declarations: [IsraelLibraryComponent],
  imports: [
    HttpClientModule
  ],
  exports: [IsraelLibraryComponent, HttpClientModule]
})
export class IsraelLibraryModule { }
