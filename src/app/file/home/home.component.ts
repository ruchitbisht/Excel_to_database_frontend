import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/service/file.service';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';

// const MIME_TYPE = {
//   xlsx:'application'
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message:string="";
  loading: boolean = false;
  file: File;

  constructor(private fileService:FileService ,private router:Router) { }

  ngOnInit(): void {
    
  }

  downloadFile(){
    this.fileService.downloadFile().subscribe(blob=>saveAs(blob,"Sample"+".xlsx"));
  }

  onChange(event:any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    if(this.file!=null){
    this.loading = true;
    console.log(this.file);
    this.fileService.saveFile(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {
                this.router.navigate(['/show'])
                this.loading = false;
            }
        }
    );}
     
}
  
}
