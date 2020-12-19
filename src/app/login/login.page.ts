import { Component } from '@angular/core';
import {User} from 'src/models/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  user = {} as User;
  constructor(private router: Router) {}
   Login(user:User){
       console.log(user.username)
   }
RegisterGo(){      
  this.router.navigate(['/register'])
  console.log('click register')
  
}

}
