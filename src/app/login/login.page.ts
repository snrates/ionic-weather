import { Component } from '@angular/core';
import { User } from 'src/models/auth';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  user = {} as User;
  constructor(private router: Router, private navCont: NavController,
    public ngFireAuth: AngularFireAuth, public ngFireStore: AngularFirestore,
    private toast: ToastController,
    private store: Storage) { }

  Login(user: User) {

    this.ngFireAuth.signInWithEmailAndPassword(user.email, user.password).then((success) => {
      this.ngFireStore.collection('kullanici').doc(success.user.uid).get().subscribe((suc) => {
        this.store.set('useruid', success.user.uid)
        this.store.set('sehir', suc.get('sehirler'))
      })
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
