import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedOnRecipeList = new EventEmitter<Recipe> ();
  //this recipeSelectedOnRecipeList Event will emit,
  //and when it fires up, its direct parent component will listen to this event

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'a test', 'https://prods3.imgix.net/images/articles/2017_06/Non-Feature-grilled-mexican-street-corn-recipe-elotes.jpg?auto=format%2Ccompress&ixjsv=2.2.3&w=670'),
    new Recipe('A 2nd recipe', 'a test', 'https://prods3.imgix.net/images/articles/2017_06/Non-Feature-grilled-mexican-street-corn-recipe-elotes.jpg?auto=format%2Ccompress&ixjsv=2.2.3&w=670'),
    new Recipe('A 3rd recipe', 'a test', 'https://prods3.imgix.net/images/articles/2017_06/Non-Feature-grilled-mexican-street-corn-recipe-elotes.jpg?auto=format%2Ccompress&ixjsv=2.2.3&w=670')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeSelectedOnRecipeList.emit(recipe);
    //this event emits when onRecipeSelectedEvent gets fired during a click event
    //this event emits a recipe object
  }

}
