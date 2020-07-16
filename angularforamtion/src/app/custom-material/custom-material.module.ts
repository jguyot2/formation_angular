// Apparemment ce serait propre de faire ça de cette manière
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
    declarations: [],
    imports: [
	CommonModule,MatToolbarModule
    ],
    exports: [
	MatToolbarModule,
	MatCardModule,
	MatButtonToggleModule
    ]
})
export class CustomMaterialModule { }
