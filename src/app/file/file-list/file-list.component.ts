import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FileRequest } from 'src/app/model/file.model';
import {FileService} from 'src/app/service/file.service';




@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
 
  constructor(private fileService:FileService,private router:Router) { }


  // filee:Array<any>;
  filee:FileRequest[]=[];
  pageSize:number=20;
  totalElement:number=0;
  totalPage:number=0;
  pageNumber:number=1;


  ngOnInit(): void {
    this.showList(); 
    
  }
  next(){
    this.pageNumber+=1;
    
    this.fileService.getFile(this.pageNumber,this.pageSize).subscribe ((data:any)=>{
      if(this.pageNumber<data.totalPages){
      this.filee=data['content'];
      console.log("FILEE"+data.page);
      this.totalPage +=1;
    }
    }, (error)=>{
      console.log(error.error.message)
    }); 
  }

  previous(){
   
    if(this.pageNumber>0){
      this.pageNumber-=1;
    this.fileService.getFile(this.pageNumber,this.pageSize).subscribe ((data:any)=>{
      // console.log(JSON.stringify(data));
      
      this.filee=data['content'];
    }, (error)=>{
      console.log(error.error.message)
    }) ;
  }
  }

  showList(){
    this.fileService.getFile(this.pageNumber-1,this.pageSize).subscribe(
      (data:any)=>{

        this.filee=data.content;
        this.pageNumber=data.number + 1;
        this.pageSize=data.size;
        this.totalElement=data.totalElements;
        this.totalPage=data.totalPages;

        console.log(this.totalElement);
      // console.log(JSON.stringify(data));
    //   console.log(data.size);
      
    //   this.filee=data['content'];
    //   this.pages=new Array(data['totalpages'])
    //   console.log("Yooo"+this.pages);
      
    // }, (error)=>{
    //   console.log(error.error.message)
    }) ;
  }

  deleteItem(srNo:any) {
    this.fileService.deleteRow(srNo).subscribe(
      data=>{
        console.log(data);
        alert("Deleted")
      this.showList();
    })
  }

  updateItem(srNo:number){
    this.router.navigate(['update', srNo]);
  }

  viewItem(srNo:number){
    this.router.navigate(['view',srNo])
  }

  downloadFile(){
    this.fileService.downloadFile().subscribe(blob=>saveAs(blob,"Sample"+".xlsx"));
  }

}


