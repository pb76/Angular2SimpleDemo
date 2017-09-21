import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appen';
  textArray = [{'firstText': 'Olle'}];

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    this.textArray.push(f.value);
    console.log(this.textArray);
    f.resetForm();
  }
}
