  import { Component, OnInit } from '@angular/core';
  import { RecipeService } from '../recipe.service';
  import { Recipe } from '../recipe/recipe.model';
  import { ActivatedRoute } from "@angular/router";
  import {RecipeComponent } from '../recipe/recipe.component'
  @Component({
      selector: 'app-recipe-detail',
      templateUrl: './recipe-detail.component.html',
      styleUrls: ['./recipe-detail.component.scss']
  })
  export class RecipeDetailComponent implements OnInit {

      constructor(private recipeService:RecipeService, private activatedRoute : ActivatedRoute) {
      }

      ngOnInit(): void {

     let id : number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
     this.recipeService.getRecipeById(id).subscribe(
  	    (result: Recipe) => {
  		this.recipe = result;
  	    },
  	    (error) => {
          console.log(error);
    });
   }
      recipe : Recipe;
  }
