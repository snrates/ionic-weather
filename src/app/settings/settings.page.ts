import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  searchQuery: string = '';
  items: string[];

  constructor(private store: Storage, public ngFireStore: AngularFirestore) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      "ADANA",
      "ADIYAMAN",
      "AFYONKARAHİSAR",
      "AĞRI",
      "AMASYA",
      "ANKARA",
      "ANTALYA",
      "ARTVİN",
      "AYDIN",
      "BALIKESİR",
      "BİLECİKK",
      "BİNGÖL",
      "BİTLİS",
      "BOLU",
      "BURDUR",
      "BURSA",
      "ÇANAKKALE",
      "ÇANKIRI",
      "ÇORUM",
      "DENİZLİ",
      "DİYARBAKIR",
      "EDİRNE",
      "ELAZIĞ",
      "ERZİNCAN",
      "ERZURUM",
      "ESKİŞEHİR",
      "GAZİANTEP",
      "GİRESUN",
      "GÜMÜŞHANE",
      "HAKKARİ",
      "HATAY",
      "ISPARTA",
      "MERSİN",
      "İSTANBUL",
      "İZMİR",
      "KARS",
      "KASTAMONU",
      "KAYSERİ",
      "KIRKLARELİ",
      "KIRŞEHİR",
      "KOCAELİ",
      "KONYA",
      "KÜTAHYA",
      "MALATYA",
      "MANİSA",
      "KAHRAMANMARAŞ",
      "MARDİN",
      "MUĞLA",
      "MUŞ",
      "NEVŞEHİR",
      "NİĞDE",
      "ORDU",
      "RİZE",
      "SAKARYA",
      "SAMSUN",
      "SİİRT",
      "SİNOP",
      "SİVAS",
      "TEKİRDAĞ",
      "TOKAT",
      "TRABZON",
      "TUNCELİ",
      "ŞANLIURFA",
      "UŞAK",
      "VAN",
      "YOZGAT",
      "ZONGULDAK",
      "AKSARAY",
      "BAYBURT",
      "KARAMAN",
      "KIRIKKALE",
      "BATMAN",
      "ŞIRNAK",
      "BARTIN",
      "ARDAHAN",
      "IĞDIR",
      "YALOVA",
      "KARABüK",
      "KİLİS",
      "OSMANİYE",
      "DÜZCE"
    ];
  }

  getItems(ev: any) {
    this.initializeItems();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ngOnInit() {
  }
  onClick(value: String) {
    this.store.get('sehir').then((val) => {
      if (val.indexOf(value) < 0) {
        val.push(value)
        this.store.set('sehir', val)
        this.store.get('useruid').then((id) => {
          this.ngFireStore.collection('kullanici').doc(id).set({ sehirler: val })
        });
      }
    });
  }

}
