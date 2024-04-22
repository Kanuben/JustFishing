import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticateUser(login: FormGroup ){
    // TODO MAKE A BACKEND THINGY
    console.log("USER AUTHENTICATED BRO");
    const devUser: User = {
      id: 1,
      name: "greg",
      email: "craig.m.ullrich@gmail.com"
    }
    return devUser;
  }

  constructor() { }
}
