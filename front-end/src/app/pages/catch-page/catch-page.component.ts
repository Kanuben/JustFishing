import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatAutocompleteModule,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { NgForOf } from '@angular/common';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FishPointCalculator } from '../../utilities/fish-point-calculator';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-catch-page',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    NgForOf,
    MatButtonModule,
  ],
  templateUrl: './catch-page.component.html',
  styleUrl: './catch-page.component.css',
})
export class CatchPageComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private fishPointCalculator: FishPointCalculator
  ) {}

  catchForm = this.formBuilder.group({
    image: '',
    weatherLocation: {
      longitude: 0,
      latitude: 0,
    },
    weightContol: this.formBuilder.control('', [Validators.required]),
    lengthControl: this.formBuilder.control(''),
    lureSubtype: this.formBuilder.control('', [Validators.required]),
    lureColor: this.formBuilder.control('', [Validators.required]),
    speciesControl: this.formBuilder.control('', [Validators.required]),
    lureControl: this.formBuilder.control('', [Validators.required]),
  });

  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }

  matcher = new MyErrorStateMatcher();
  /*
      'Crappie',
    'Sturgeon',
    'Sunfish',
    'Carp',
    'Spotted Bass',
    'Catfish',
    'Buffalo',
    'Bowfin',
    'Drum',
    'Walleye',
    'Gar',
    'Trout',
    'Brook Trout',
    'Small Mouth Bass',
    'Pike',
    'Muskie',*/
  species: string[] = [
    'Bluegill',
    'Large Mouth Bass',
    'Channel Catfish'
  ];
  lureType: string[] = ['Hard', 'Soft', 'Fly', 'Live'];
  filteredSpecies!: Observable<string[]>;
  filteredLure!: Observable<string[]>;

  ngOnInit() {
    this.species.sort();
    this.lureType.sort();
    this.filteredLure = this.catchForm.controls.lureControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterLure(value || ''))
    );
    this.filteredSpecies =
      this.catchForm.controls.speciesControl.valueChanges.pipe(
        startWith(''),
        map((value) => this._filterSpecies(value || ''))
      );
  }

  onSubmit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.catchForm.value.weatherLocation = {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        };
        this.fishPointCalculator.calculatePoints(this.catchForm);
      });
    } else {
      console.log('No support for geolocation');
    }
  }

  private _filterSpecies(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.species.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  private _filterLure(value: string): string[] {
    console.log('hi');
    const filterValue = value.toLowerCase();
    return this.lureType.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
