import { Component } from '@angular/core';
import {User} from 'src/models/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = {} as User;
  constructor() {}
   Login(user:User){
       console.log(user.username)
   }
RegisterGo(){      
  console.log('click register')
  
}

}
