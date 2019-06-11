import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string ='';
  password: string ='';
  
  
  welcome="welcome to my app!"

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLogin(){
    this.router.navigate(['/detail'], {queryParams: {username: this.username, password: this.password}})
  }

}
