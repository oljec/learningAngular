import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
        new Recipe('Another test recipe', 'This is test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
    ];

    selectedRecipe = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }
}