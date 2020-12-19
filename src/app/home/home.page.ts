import { Component } from '@angular/core';
import {User} from 'src/models/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
