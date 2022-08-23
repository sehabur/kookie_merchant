import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from "@ionic/angular";
import { ToastController } from '@ionic/angular';    
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';    
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  user = {}
  scannedCode = {}

  constructor(
    public afAuth: AngularFireAuth,  
    private navCtrl: NavController,
    public toastController: ToastController,
    private qrScanner: QRScanner,
    private barcodeScanner: BarcodeScanner,
    ) {
      // this.user = this.afAuth.auth.currentUser.email;
    }

  values = '';
  onKey(value: string) {
    this.values = value;
    console.log(this.values);
  }
  
  
  async logout() {
    await this.afAuth.auth.signOut();
    await this.navCtrl.navigateForward("/login");
    await this.presentToast();
  }  

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your have successfully logged out.',
      duration: 3000
    });
    toast.present();
  }

  cap() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      console.log(this.scannedCode);
    })
  }

  scnr() {
        // Optionally request the permission early
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        // camera permission was granted


        // start scanning
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);

          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
        });

      } else if (status.denied) {
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
      } else {
        // permission was denied, but not permanently. You can ask for permission again at a later time.
      }
    })
    .catch((e: any) => console.log('Error is', e));

  }

  // getUser(userID) {
  //   console.log(this.userID.value);
  // }
  

  ngOnInit() {
    
  }

}
