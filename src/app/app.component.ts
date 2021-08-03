import { Component } from '@angular/core';
import { FileService } from './service/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exceltodatabase';

  constructor(private fileService:FileService) { }

  downloadFile(){
    this.fileService.downloadFile().subscribe(blob=>saveAs(blob,"Sample"+".xlsx"));
  }
  

}
