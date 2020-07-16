import { Component, OnInit, Inject } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { MOCK_RECIPES } from 'src/assets/recipes.mock'
import { RecipeService } from '../recipe.service';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
    constructor(private recipe:RecipeService) {}
    ngOnInit(): void {
	this.recipe.getRecipes().subscribe(	
	    (result: Recipe[]) => {
		this.recipes = result;
	    },
	    (error) => {
		this.recipes = [];
	    })
    }
    recipes : Recipe[];
}
