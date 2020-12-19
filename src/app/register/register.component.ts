import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user = {} as User
  constructor() { }

  ngOnInit() {}
  Register( user: User){
     
  }
}
