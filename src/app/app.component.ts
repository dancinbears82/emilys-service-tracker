import { Component } from '@angular/core';
import { UserService } from "./shared/user.service";
import { User } from "./shared/user";

@Component({
  selector: 'aap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'aap works!';
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.user$.subscribe(user => this.user = user)
  }

  LoginGoogle() {
    console.log("login button pressed");
    this.userService.login();
  };

  Logout() {
    console.log("logout button pressed");
    this.userService.logout();
  };




}
