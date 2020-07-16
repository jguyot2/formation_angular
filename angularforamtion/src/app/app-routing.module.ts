import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {RecipeListComponent} from './recipe-list/recipe-list.component';

const routes: Routes = [
    {
        path: 'recipes',
        component: RecipeListComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'recipes',
        pathMatch: 'full'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
	CommonModule,
	RouterModule.forRoot(routes)
    ]
})


export class AppRoutingModule { }
