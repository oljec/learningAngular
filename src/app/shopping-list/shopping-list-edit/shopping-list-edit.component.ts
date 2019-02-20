import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  editForm: FormGroup;
  subscription: Subscription;
  editMode = false;
  editedItemId: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'amount': new FormControl(null, [
        Validators.required,
        Validators.pattern('^[1-9]+[0-9]*$')
      ])
    });

    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (id: number) => {
        this.editMode = true;
        this.editedItemId = id;
        this.editedItem = this.shoppingListService.getIngredient(id);
        this.editForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onSubmit() {
    console.log(this.editForm);

    if ( this.editForm.invalid ) {
      return console.log('error!');
    }

    const newIngredient = new Ingredient(
      this.editForm.get('name').value,
      this.editForm.get('amount').value
    );

    if ( this.editMode ) {
      this.shoppingListService.updateIngredient(this.editedItemId, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }

    this.onClear();
  }

  onClear(){
    this.editMode = false;
    this.editForm.reset();
  }
  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemId);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
