import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { FileRequest } from '../model/file.model';
import { Observable } from 'rxjs';
import { Login } from '../model/login';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }
  baseUrl: string ='http://localhost:8080';

  getLogIn(logdata:Login){
    return this.http.post(`$this.baseUrl}/login`,logdata)    
  }
  
  getFiles(){
    return this.http.get(`${this.baseUrl}/filess`);
  }

  getFileByKeyword(keyword:any,pageNumber:number,pageSize:number) :Observable<GetResponseProductList>{
    return this.http.get<GetResponseProductList>(`${this.baseUrl}/filter/word?keyword=`+keyword+`&page=`+pageNumber+`&size=`+pageSize)
  }

  getFileByCustomerName(customerName:any,pageNumber:number,pageSize:number):Observable<GetResponseProductList>{
    return this.http.get<GetResponseProductList>(`${this.baseUrl}/filter/customerName?customerName=`+customerName+`&page=`+pageNumber+`&size=`+pageSize)
  }

  getFileByCustomerCode(customerCode:any,pageNumber:number,pageSize:number):Observable<GetResponseProductList>{
    return this.http.get<GetResponseProductList>(`${this.baseUrl}/filter/customerCode?customerCode=`+customerCode+`&page=`+pageNumber+`&size=`+pageSize)
  }
  getFileBySiteName(siteName:any,pageNumber:number,pageSize:number):Observable<GetResponseProductList>{
    return this.http.get<GetResponseProductList>(`${this.baseUrl}/filter/siteName/?siteName=`+siteName+`&page=`+pageNumber+`&size=`+pageSize)
  }

  getFileByState(state:any,pageNumber:number,pageSize:number):Observable<GetResponseProductList>{
    return this.http.get<GetResponseProductList>(`${this.baseUrl}/filter/state/?state=`+state+`&page=`+pageNumber+`&size=`+pageSize)
  }

  getFileBySiteAddress(siteAddress:any,pageNumber:number,pageSize:number):Observable<GetResponseProductList>{
    return this.http.get<GetResponseProductList>(`${this.baseUrl}/filter/siteAddress/?siteAddress=`+siteAddress+`&page=`+pageNumber+`&size=`+pageSize)
  }

  getFileByCity(city:any,pageNumber:number,pageSize:number):Observable<GetResponseProductList>{
    return this.http.get<GetResponseProductList>(`${this.baseUrl}/filter/city/?city=`+city+`&page=`+pageNumber+`&size=`+pageSize)
  }

  getFileByLocalContactPersonName(localContactPersonName:any,pageNumber:number,pageSize:number):Observable<GetResponseProductList>{
    return this.http.get<GetResponseProductList>(`${this.baseUrl}/filter/localContactPersonName/?localContactPersonName=`+localContactPersonName+`&page=`+pageNumber+`&size=`+pageSize)
  }

  getFileByTypeOfCharger(typeOfCharger:any,pageNumber:number,pageSize:number):Observable<GetResponseProductList>{
    return this.http.get<GetResponseProductList>(`${this.baseUrl}/filter/typeOfCharger/?typeOfCharger=`+typeOfCharger+`&page=`+pageNumber+`&size=`+pageSize)
  }

  getFileByLocalPersonContact(localPersonContact:any,pageNumber:number,pageSize:number):Observable<GetResponseProductList>{
    return this.http.get<GetResponseProductList>(`${this.baseUrl}/filter/localPersonContact/?localPersonContact=`+localPersonContact+`&page=`+pageNumber+`&size=`+pageSize)
  }

  getFileByModel(model:any,pageNumber:number,pageSize:number):Observable<GetResponseProductList>{
    return this.http.get<GetResponseProductList>(`${this.baseUrl}/filter/model/?model=`+model+`&page=`+pageNumber+`&size=`+pageSize)
  }

  getFileBySerialNumber(serialNumber:any,pageNumber:number,pageSize:number):Observable<GetResponseProductList>{
    return this.http.get<GetResponseProductList>(`${this.baseUrl}/filter/serialNumber/?serialNumber=`+serialNumber+`&page=`+pageNumber+`&size=`+pageSize)
  }

  getFileByFinalInstallationStatus(finalInstallationStatus:any,pageNumber:number,pageSize:number):Observable<GetResponseProductList>{
    return this.http.get<GetResponseProductList>(`${this.baseUrl}/filter/finalInstallationStatus/?finalInstallationStatus=`+finalInstallationStatus+`&page=`+pageNumber+`&size=`+pageSize)
  }

  getFileByInstallationStatus(installationStatus:any,pageNumber:number,pageSize:number):Observable<GetResponseProductList>{
    return this.http.get<GetResponseProductList>(`${this.baseUrl}/filter/installationStatus/?installationStatus=`+installationStatus+`&page=`+pageNumber+`&size=`+pageSize)
  }

  getFileByCommissioningStatus(commissioningStatus:any,pageNumber:number,pageSize:number):Observable<GetResponseProductList>{
    return this.http.get<GetResponseProductList>(`${this.baseUrl}/filter/commissioningStatus/?commissioningStatus=`+commissioningStatus+`&page=`+pageNumber+`&size=`+pageSize)
  }

  getFileByCommissionedBy(commissionedBy:any,pageNumber:number,pageSize:number):Observable<GetResponseProductList>{
    return this.http.get<GetResponseProductList>(`${this.baseUrl}/filter/commissionedBy/?commissionedBy=`+commissionedBy+`&page=`+pageNumber+`&size=`+pageSize)
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
  pageable:{
    pageNumber:number
  },
  totalElements:number,
  totalPages:number,
  size:number,
  number:number,
  sort:{},
  empty:boolean
}
