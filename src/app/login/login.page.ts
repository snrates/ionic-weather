import { Component } from '@angular/core';
import { User } from 'src/models/auth';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  user = {} as User;
  constructor(private router: Router, private navCont: NavController) { }
  Login(user: User) {
    console.log(user)
    this.navCont.navigateRoot(['tabs'])
  }
  Register() {
    this.router.navigate(['/register'])
    console.log('click register')


  }

}
