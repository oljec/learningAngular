import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  editForm: FormGroup;

  constructor(private route: ActivatedRoute, 
    private recipeService: RecipeService) { 
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);

        // this.recipe = this.recipeService.getRecipe(this.id);
      }
    );

    this.editForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'imagePath': new FormControl(null, [Validators.required])
    });
  }

}
