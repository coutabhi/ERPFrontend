import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { InsertService } from 'src/app/services/insert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  msg: String = "";
  admin: UserComponent = new UserComponent();

  constructor(private router: Router, private ls: InsertService, private authService: AuthService) { }

  ngOnInit(): void {
  }


  goToAdmin(adminpanel: String) {
    this.router.navigate(['${adminpanel}']);
  }

  loginAdmin() {
    console.log(this.admin)
    this.ls.loginAdmin(this.admin).subscribe(
      _data => {
        alert("logged in successfully");
        console.log("Successfull");
        this.router.navigateByUrl('/adminpanel');
      },
      _error => {
        this.msg = 'Please recheck your password and emailid';
        console.log("Error");
      }
    )
  }

}
