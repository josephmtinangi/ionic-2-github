import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GithubService } from '../../providers/github-service';

/*
  Generated class for the Profiles page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html'
})
export class ProfilesPage {

  profiles: any;
  repos: any;
  github_user = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilesPage');
  }

  onSubmit() {

  }

}
