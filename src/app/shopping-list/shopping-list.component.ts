import { ingridient } from './../shared/ingridient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingridient[] = [
    new ingridient('apples', 5),
    new ingridient('Tomates', 10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
