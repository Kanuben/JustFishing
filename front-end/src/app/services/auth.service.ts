import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticateUser(login: FormGroup ){
    // TODO MAKE A BACKEND THINGY
    console.log("USER AUTHENTICATED BRO");
    return true;
  }

  constructor() { }
}
