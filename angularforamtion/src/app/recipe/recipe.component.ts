import { Component, OnInit, Input} from '@angular/core';
import {Recipe} from './recipe.model'
import {MOCK_RECIPES} from 'src/assets/recipes.mock'
@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    @Input()
    recipe : Recipe;
}
