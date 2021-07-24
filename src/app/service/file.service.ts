import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { File } from '../model/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }
  baseUrl: string ='http://localhost:8080';

  getFile() {
    return this.http.get(`${this.baseUrl}/files`);
  }
  createRow(file: File) {
    return this.http.post(`${this.baseUrl}/file`, file);
  }





}
