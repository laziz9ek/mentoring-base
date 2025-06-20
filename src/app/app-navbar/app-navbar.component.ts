import { style } from "@angular/animations";
import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";


const menuItems: string[] = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];
const upperCaseMenuItems: string[] = menuItems.map(
  (item) => {
    return item.toUpperCase();
  }
);


@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink, RouterOutlet, NgIf, NgFor],
    templateUrl: './app-navbar.component.html',
    styleUrl: './app-navbar.component.scss'
})

export class AppNavBar {
    isShowCatalog: boolean = true;
    isShowBanner: boolean = true;

    text: string = 'Click';

    readonly topHeaderBarItem1 = 'Главная';
    readonly aboutCompany = 'О компании';
    readonly catalog = 'Каталог';
    readonly users = 'Пользователи';
    readonly orderBtn = 'Пусто';
    readonly phoneNumber = '+7 (965) 084-29-29';
    readonly header2Item1 = upperCaseMenuItems[0];
    readonly bottomHeaderBarItem2 = menuItems[1];
    readonly bottomHeaderBarItem3 = 'Инструменты';
    readonly bottomHeaderBarItem4 = 'Электрика';
    readonly bottomHeaderBarItem5 = 'Интерьер и одежда';
    readonly location = 'Москва';


    menuItems: string[] = upperCaseMenuItems;
    isUpperCase = true;
  
    changeMenuText() {
      this.menuItems = upperCaseMenuItems.map(
        item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
      )
      this.isUpperCase = !this.isUpperCase;
    }
  
}


