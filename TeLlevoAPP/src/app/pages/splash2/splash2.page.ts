import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash2',
  templateUrl: './splash2.page.html',
  styleUrls: ['./splash2.page.scss'],
})
export class Splash2Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('costo');
    },2000);
  }

  ngOnInit() {
  }

}
