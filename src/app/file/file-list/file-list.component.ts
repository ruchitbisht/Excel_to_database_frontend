import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FileService} from 'src/app/service/file.service'
@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {

  constructor(private fileService:FileService,private router:Router) {
   }
  filee:any=[];
  ngOnInit(): void {
    this.fileService.getFile().subscribe(
      data=>{
      this.filee=data;
    })
  }

}
