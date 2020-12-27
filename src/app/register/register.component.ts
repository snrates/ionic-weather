import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/auth';
import { AngularFireAuth } from "@angular/fire/auth";
import { NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user = {} as User
  constructor(public ngFireAuth: AngularFireAuth, private navCont: NavController,private toast:ToastController) { }

  ngOnInit() { }
  Register(email, pass) {
    
    this.ngFireAuth.createUserWithEmailAndPassword(email, pass).then((success)=>{
      this.navCont.back()    
      this.showtoast("Kayıt Oluşturuldu")
    }).catch((error)=>{
      this.showtoast("Kayıt oluşturulamadı  ")
    });
     
  }

  async  showtoast(msg: string){
    const toast = await this.toast.create({
     message: msg,
    duration:3000,         
   });
   toast.present();
 }
}
