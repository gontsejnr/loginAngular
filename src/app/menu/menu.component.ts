import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pageMenu = [{name:"home", path:"menu/home"},{name:"about", path:"menu/about"},{name:"contact", path:"menu/contact"}];

  constructor( private router: Router) { }

  ngOnInit() {
  }
  onNavigate(item){
    this.router.navigateByUrl(item.path)
  }

}
