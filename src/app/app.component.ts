import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


const menuItems: string[] = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']
const upperCaseMenuItems:string[] = menuItems.map(
  (item:string) => {
    return item.toUpperCase();
  }
);
const newPages: number[] = [5, 4, 3, 2, 1]

//const headerItem2 = 'О компании';

const company = (name:string) => name;
const aboutCompany:string = company('О компании')

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';
  
  isShowCatalog:boolean = true;
  text:string = 'Click';

  isShowBanner:boolean = true;

  readonly topHeaderBarItem1 = 'Главная';
  readonly aboutCompany = company(aboutCompany);
  readonly catalog = 'Каталог';
  readonly orderBtn = 'Пусто';
  readonly phoneNumber = '+7 (965) 084-29-29';

  readonly bottomHeaderBarItem1 = 'Каталог';
  readonly bottomHeaderBarItem2 = 'Стройматериалы';
  readonly bottomHeaderBarItem3 = 'Инструменты';
  readonly bottomHeaderBarItem4 = 'Электрика';
  readonly bottomHeaderBarItem5 = 'Интерьер и одежда';
  readonly location = 'Москва';

  readonly header2Items:string = upperCaseMenuItems[0];
  
  readonly newPages:number[] = newPages;


  menuItems:string[] = upperCaseMenuItems;

  isUpperCase:boolean = true;

  changeMenuText():void {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase
  }

}
