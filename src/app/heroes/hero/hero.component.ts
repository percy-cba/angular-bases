import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'IronMan';
  public age: number = 45;

  get capitalizedName():string {
    return 'Hola mundo'.toUpperCase();
  }

  getHeroDescriptions():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'SpiderMan';
  }

  changeAge():void {
    this.age = 50;
  }

  resetForm():void {
    this.name = 'Ironman'
    this.age = 45;
  }

}
