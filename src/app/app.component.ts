import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AgeCalculator';
  
  @ViewChild('dobInput') dobInput!: ElementRef;
  @ViewChild('ageInput') ageInput!: ElementRef;

  calculateAge() {
    const birthYear = new Date(this.dobInput.nativeElement.value).getFullYear();
    const currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.ageInput.nativeElement.value = age;
  }
}
