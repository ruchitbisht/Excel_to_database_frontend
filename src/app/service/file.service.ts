import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { FileRequest } from '../model/file.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }
  baseUrl: string ='http://localhost:8080';
  
getFiles(){
  return this.http.get(`${this.baseUrl}/filess`);
}

  getFile(pageNumber:number,pageSize:number) :Observable<GetResponseProductList>{
    return this.http.get<GetResponseProductList>(`${this.baseUrl}/files`+`?page=`+pageNumber+`&size=`+pageSize)
  }
  createRow(file:FileRequest) {
    return this.http.post(`${this.baseUrl}/files`, file)
  }

  deleteRow(id:number){
    return this.http.delete(`${this.baseUrl}/files/`+id)
  }

  updateRow(id:number,file:FileRequest){
    return this.http.put(`${this.baseUrl}/files/`+id,file)
  }

  getFileById(id:number) {
    return this.http.get(`${this.baseUrl}/files/`+id)
  }

  downloadFile(): Observable<Blob> {
  return this.http.get(`${this.baseUrl}/download`+`?fileName=Sample.xlsx`,{
    responseType: 'blob'
  });
  }

  saveFile(file:any): Observable<any> {
    const formData = new FormData();
    formData.append("file" , file , file.name)
    return this.http.post(`${this.baseUrl}/file`,formData)
  }

}

interface GetResponseProductList{
  content:FileRequest[],
  totalElements:number,
  totalPages:number,
  size:number,
  number:number
}