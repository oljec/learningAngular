import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

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

    constructor(private slService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToSL(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(id: number, recipe: Recipe) {
        this.recipes[id] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(id: number) {
        this.recipes.splice(id, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}