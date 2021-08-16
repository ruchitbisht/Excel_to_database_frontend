import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileRequest } from 'src/app/model/file.model';
import { FileService } from 'src/app/service/file.service';


@Component({
  selector: 'app-insert-row',
  templateUrl: './insert-row.component.html',
  styleUrls: ['./insert-row.component.css']
})
export class InsertRowComponent implements OnInit {

  file : FileRequest = new FileRequest();

  constructor(private fileService:FileService, private router:Router) { }

  ngOnInit(): void {  
  }

  doSubmitForm(){
    console.log("Row Added...");
    console.log("Data"+this.file);
    
    this.fileService.createRow(this.file).subscribe(
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
