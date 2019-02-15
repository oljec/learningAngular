import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Borsh', 
            'Nice and tasty', 
            'https://gotovim-doma.ru/images/recipe/0/0a/00ad9d3b1ff86a92ce5935bc47a1bdee.jpg',
            [
                new Ingredient('svekla', 3),
                new Ingredient('water', 10),
                new Ingredient('kartoshka', 2)
            ]
        ),
        new Recipe(
            'Deryni', 
            'Gooood', 
            'https://gotovim-doma.ru/images/recipe/b/19/b19d92100a69d3d07390af0cfe6d7a45.jpg',
            [
                new Ingredient('kartoshka', 5),
                new Ingredient('maslo', 1)
            ]
        )
    ];

    selectedRecipe = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }
}