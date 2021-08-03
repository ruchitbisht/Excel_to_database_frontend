import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileRequest } from 'src/app/model/file.model';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  srNo:number;
  file:any= new FileRequest();
  
  constructor(private fileService:FileService ,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.file=new FileRequest();
    this.srNo=this.route.snapshot.params['srNo'];
    this.fileService.getFileById(this.srNo).subscribe(
      data=>{
        console.log(JSON.stringify(data));
        this.file=data;
    },
      error=>console.log(error));
  }

  updateItem(srNo:number){
    this.router.navigate(['update', srNo]);
  }
  onCancel(){
    this.router.navigate(['/show']);
  }

}
