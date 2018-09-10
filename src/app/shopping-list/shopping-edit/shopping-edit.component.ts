import { Component, OnInit, Output, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  //did not explain what ViewChild is 
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  //this ingredientAdded method passes out a new ingredient to its parent compon

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingreName = this.nameInputRef.nativeElement.value;
    const ingreAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingreName, ingreAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
