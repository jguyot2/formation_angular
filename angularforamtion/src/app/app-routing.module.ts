import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component'
const routes: RouterModule [] = [
  {
      path: 'recipes/:id',
      component: RecipeDetailComponent,
      pathMatch: 'full'
  },
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
