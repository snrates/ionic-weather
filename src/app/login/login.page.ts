import { Component } from '@angular/core';
import { User } from 'src/models/auth';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  user = {} as User;
  constructor(private router: Router, private navCont: NavController,
    public ngFireAuth: AngularFireAuth, private toast: ToastController) { }

  Login(user: User) {

    this.ngFireAuth.signInWithEmailAndPassword(user.email, user.password).then((success) => {
      this.navCont.navigateRoot("tabs")
      this.showtoast("HOŞGELDİNİZ")

    }).catch((err) => {
      this.showtoast("Giriş Hatalı")
      console.log(err)
    })
  }

  Register() {
    this.router.navigate(['/register'])
  }

  async showtoast(msg: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000,
    });
    toast.present();
  }

}
