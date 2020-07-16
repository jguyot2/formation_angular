import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe/recipe.model'
import {RecipeService} from '../recipe.service'

@Component({
  selector: 'app-recipe-creation',
  templateUrl: './recipe-creation.component.html',
  styleUrls: ['./recipe-creation.component.scss']
})

export class RecipeCreationComponent implements OnInit {

  constructor(private service: RecipeService) { }


  @Input()
  createdRecipe : Recipe;

  ngOnInit(): void {}

  onSubmit() { this.service.putRecipe(this.createdRecipe).subscribe(); }
}
