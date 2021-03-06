import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { ApiResponse } from 'src/app/model/api.response';
import { FileRequest } from 'src/app/model/file.model';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-update-file',
  templateUrl: './update-file.component.html',
  styleUrls: ['./update-file.component.css']
})
export class UpdateFileComponent implements OnInit {

  srNo:number;
  file:any= new FileRequest();
  apiResponse:ApiResponse;


  constructor(private fileService:FileService ,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.file=new FileRequest();
    this.srNo=this.route.snapshot.params['srNo'];
    this.fileService.getFileById(this.srNo).subscribe(
      data=>{
        console.log(JSON.stringify(data));
        this.file=data;
    },
      error=>console.log(error));
  }

  onSubmit() {
    this.fileService.updateRow(this.srNo,this.file).subscribe(
      data=>console.log(data),error=>console.error());
      // this.fileService.getFile();
      this.router.navigate(['/show']);
      
  }

  onCancel(){
    this.router.navigate(['/show']);
  }
  

}
