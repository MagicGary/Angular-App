import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  //this is the really confusing part, because here we import a recipe object,
  //where are we inputing it from? which child class? 
  //it gotta be from the recipe component, its direct parent component
  //but how does its parent component get it from recipe list?

  constructor() { }

  ngOnInit() {
  }

}
