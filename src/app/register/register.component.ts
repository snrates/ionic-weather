import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/auth';
import { AngularFireAuth } from "@angular/fire/auth";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user = {} as User
  constructor(public ngFireAuth: AngularFireAuth) { }

  ngOnInit() { }
  Register(email, pass) {
    console.log(email)
    this.ngFireAuth.createUserWithEmailAndPassword(email, pass);
    console.log('click register')
  }
}
