import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  editForm: FormGroup;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      'name': new FormControl(null),
      'amount': new FormControl(0)
    });
  }

  onSubmit() {
    const newIngredient = new Ingredient(
      this.editForm.get('name').value,
      this.editForm.get('amount').value
    );

    this.shoppingListService.addIngredient(newIngredient);
  }

}
