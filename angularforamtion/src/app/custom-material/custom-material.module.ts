// Apparemment ce serait propre de faire ça de cette manière
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatToolbarModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule
  ]
})
export class CustomMaterialModule { }
