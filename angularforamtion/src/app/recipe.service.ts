import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_RECIPES } from 'src/assets/recipes.mock'
import {Recipe} from './recipe/recipe.model'
import {HttpClient} from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    constructor(private http:HttpClient) { }
    private recipeUrl ='http://10.0.1.101:8080/api/v1/recipes';

    getRecipes(): Observable<Recipe[]> {
	return this.http.get<Recipe[]>(this.recipeUrl)
    }
    getRecipe(id: number): Observable<Recipe> {
	return this.http.get<Recipe>(`${ this.recipeUrl }/${ id }`);
    }    
}

