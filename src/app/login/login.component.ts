import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { FileService } from '../service/file.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logdata: Login =new Login();
  constructor(private fileService:FileService,private router:Router) { }

  ngOnInit(): void {
  }

  validLogin(){
    this.fileService.getLogIn(this.logdata).subscribe(
      response=>{
        
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    )
    this.router.navigate(['/show'])
  }

}
