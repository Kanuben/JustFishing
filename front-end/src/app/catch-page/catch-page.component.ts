
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';



@Component({
  selector: 'app-catch-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatAutocompleteModule,FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe],
  templateUrl: './catch-page.component.html',
  styleUrl: './catch-page.component.css'
})
export class CatchPageComponent implements OnInit{
  myControl = new FormControl('');
  options: string[] = ['Pike', 'Muskie', 'Crappie', 'Sturgeon', 'Sunfish', 'Carp', 'Spotted Bass', 'Catfish', 'Buffalo', 'Bowfin', 'Drum', 'Walleye', 'Gar', 'Trout', 'Brook Trout', 'Small Mouth Bass', 'Large Mouth Bass'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.options.sort();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
