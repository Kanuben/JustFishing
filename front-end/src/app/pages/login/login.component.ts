import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { User } from '../../models/user';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  loginForm = this.formBuilder.group({
    emailFormControl:this.formBuilder.control('', [Validators.required, Validators.email]),
    passwordFormControl: this.formBuilder.control('', [Validators.required, Validators.minLength(8)])
  });

  matcher = new MyErrorStateMatcher();

  onSubmit(){
      this.router.navigate(['/home'], {state: {user:this.authService.authenticateUser(this.loginForm)}});
  }

}
