import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //input a recipe object name it recipeInput
  //from a recipe model under recipe (root) folder to this child folder
  //so this recipeInput object from recipe-item component
  //can be used in recipe-item.html template for data binding
  @Input() recipeInput: Recipe;

  @Output() recipeSelected = new EventEmitter<void>();
  //output this event to its parent component 
  //when this recipeSelected Event starts to emit,
  //its direct parent component will subscribe to listen to this event

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    this.recipeSelected.emit();
    //this event emits when on Select event is fired

  }

}
