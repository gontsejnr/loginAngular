import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  welcome="welcome to my app!"

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLogin(){
    this.router.navigateByUrl("menu")
  }

}
