import { Pipe, PipeTransform } from '@angular/core';
import { empty } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, cName:string): any {
    if(cName=== ''){
      return value;
    }else{
      console.log(value);
      console.log(cName);
        const fileArray:any[]=[];
    for(let i=0;i<=value.length;i++){
        let idd:any=value[i].customerName;
        if(idd.startsWith(cName)){
            fileArray.push(value[i])
        }
      }
    return fileArray;
    }
  }

}
