import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reviewfirstform',
  templateUrl: './reviewfirstform.page.html',
  styleUrls: ['./reviewfirstform.page.scss'],
})
export class ReviewfirstformPage implements OnInit {

  primaryDetails: any;
  constructor(private router: Router, public alertController: AlertController) { 
    // this.primaryDetails = this.router.getCurrentNavigation().extras.state.data;
    console.log(this.router.getCurrentNavigation().extras.state.data);
  }

  ngOnInit() {
    this.primaryDetails = this.router.getCurrentNavigation().extras.state.data;
    console.log(this.router.getCurrentNavigation().extras.state.data);
  }

  async submit(){
    
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Primary details successfully submited .',
      buttons: ['ok']
    });

    await alert.present();
    this.router.navigateByUrl('home'); 
  }

}
