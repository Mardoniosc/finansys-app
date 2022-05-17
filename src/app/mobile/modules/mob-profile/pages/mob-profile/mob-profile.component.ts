import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mob-profile',
  templateUrl: './mob-profile.component.html',
  styleUrls: ['./mob-profile.component.scss']
})
export class MobProfileComponent implements OnInit {

  imagemPath = '../../../../../../assets/IMG/user.png';

  constructor() { }

  ngOnInit(): void {
  }

}
