import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-insert-row',
  templateUrl: './insert-row.component.html',
  styleUrls: ['./insert-row.component.css']
})
export class InsertRowComponent implements OnInit {

  constructor(private fileService:FileService, private router:Router) { }

  ngOnInit(): void {
  }

}
