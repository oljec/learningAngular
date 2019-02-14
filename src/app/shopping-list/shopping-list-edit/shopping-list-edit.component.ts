import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() addNewIngredient = new EventEmitter<Ingredient>();
  editForm: FormGroup;

  constructor() { }

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

    this.addNewIngredient.emit(newIngredient);
  }

}
