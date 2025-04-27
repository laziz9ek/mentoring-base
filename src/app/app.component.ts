import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const menuItems: string[] = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];
const upperCaseMenuItems: string[] = menuItems.map(
  (item) => {
    return item.toUpperCase();
  }
);

const newPages: number[] = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  isShowCatalog: boolean = true;
  isShowBanner: boolean = true;

  text: string = 'Click';

  readonly topHeaderBarItem1 = 'Главная';
  readonly aboutCompany = 'О компании';
  readonly catalog = 'Каталог';
  readonly orderBtn = 'Пусто';
  readonly phoneNumber = '+7 (965) 084-29-29';
  readonly header2Item1 = upperCaseMenuItems[0];
  readonly bottomHeaderBarItem2 = menuItems[1];
  readonly bottomHeaderBarItem3 = 'Инструменты';
  readonly bottomHeaderBarItem4 = 'Электрика';
  readonly bottomHeaderBarItem5 = 'Интерьер и одежда';
  readonly location = 'Москва';

  menuItems: string[] = upperCaseMenuItems;
  newPages: number[] = newPages;
  isUpperCase = true;

  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase;
  }

}