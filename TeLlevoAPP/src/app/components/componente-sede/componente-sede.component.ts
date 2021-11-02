import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-componente-sede',
  templateUrl: './componente-sede.component.html',
  styleUrls: ['./componente-sede.component.scss'],
})
export class ComponenteSedeComponent implements OnInit {
  dato: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
}
