import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private fileService:FileService, private router:Router) { }

  ngOnInit(): void {
  }

  downloadFile(){
    this.fileService.downloadFile().subscribe(blob=>saveAs(blob,"Sample"+".xlsx"));
  }
  refresh(){
    window.location.reload();
  }

}
