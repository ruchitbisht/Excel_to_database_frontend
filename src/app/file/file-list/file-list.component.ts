import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { data } from 'jquery';

import { FileRequest } from 'src/app/model/file.model';
import { FileService } from 'src/app/service/file.service';




@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class FileListComponent implements OnInit {


  constructor(private fileService: FileService, private router: Router) { }


  filee: FileRequest[] = [];
  files: any = [];
  pageSize: number = 20;
  totalElement: number = 0;
  totalPage: number = 0;
  pageNumber: number = 0;
  globalTotalPage: number = 0;
  clicks: boolean = false;
  checker: number;
  isEmpty: boolean;
  tick1: boolean = false;
  tick2: boolean = false;
  tick3: boolean = false;
  tick4: boolean = false;
  tick5: boolean = false;
  tick6: boolean = false;
  tick7: boolean = false;
  tick8: boolean = false;
  tick9: boolean = false;
  tick10: boolean = false;
  tick11: boolean = false;
  tick12: boolean = false;
  tick13: boolean = false;
  tick14: boolean = false;
  tick15: boolean = false;


  ngOnInit(): void {
    this.showList();
  }

  @ViewChild('search') search: ElementRef;
  @ViewChild('cName') cName: ElementRef;
  @ViewChild('cCode') cCode: ElementRef;
  @ViewChild('sName') sName: ElementRef;
  @ViewChild('sAddress') sAddress: ElementRef;
  @ViewChild('city') city: ElementRef;
  @ViewChild('state') state: ElementRef;
  @ViewChild('lCPName') lCPName: ElementRef;
  @ViewChild('lPContact') lPContact: ElementRef;
  @ViewChild('tOCharger') tOCharger: ElementRef;
  @ViewChild('model') model: ElementRef;
  @ViewChild('sNumber') sNumber: ElementRef;
  @ViewChild('fIStatus') fIStatus: ElementRef;
  @ViewChild('iStatus') iStatus: ElementRef;
  @ViewChild('cStatus') cStatus: ElementRef;
  @ViewChild('cBy') cBy: ElementRef;
  @ViewChild('cDate') cDate: ElementRef;

  

  filterData() {

    this.fileService.getFileByKeyword(this.search.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
      console.log(this.search.nativeElement.value);
      this.totalElement=data.totalElements;
      this.filee = data.content;
    })
  }


  filterCustomerName() {

    this.fileService.getFileByCustomerName(this.cName.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
      console.log(this.cName.nativeElement.value);
      this.totalElement=data.totalElements;
      this.filee = data.content;
    })
  }
  filterCustomerCode() {
    this.fileService.getFileByCustomerCode(this.cCode.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
      console.log(this.cCode.nativeElement.value);

      this.filee = data.content;
    })
  }

  filterSiteName() {
    this.fileService.getFileBySiteName(this.sName.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
      console.log(this.sName.nativeElement.value);
      this.filee = data.content;
    })

  }

  filterSiteAddress() {
    this.fileService.getFileBySiteAddress(this.sAddress.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
      console.log();

      this.filee = data.content;
    })

  }

  filterCity() {
    this.fileService.getFileByCity(this.city.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
      console.log();

      this.filee = data.content;
    })

  }

  filterState() {
    this.fileService.getFileByState(this.state.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
      console.log();

      this.filee = data.content;
    })

  }

  filterLocalContactPersonName() {
    this.fileService.getFileByLocalContactPersonName(this.lCPName.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
      console.log();

      this.filee = data.content;
    })

  }

  filterLocalPersonContact() {
    this.fileService.getFileByLocalPersonContact(this.lPContact.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
      console.log();

      this.filee = data.content;
    })

  }

  filterTypeOfCharger() {
    this.fileService.getFileByTypeOfCharger(this.tOCharger.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
      console.log();

      this.filee = data.content;
    })

  }

  filterModel() {
    this.fileService.getFileByModel(this.model.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
      console.log();

      this.filee = data.content;
    })

  }

  filterSerialNumber() {
    this.fileService.getFileBySerialNumber(this.sNumber.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
      console.log();

      this.filee = data.content;
    })

  }

  filterFinalInstallationStatus() {
    this.fileService.getFileByFinalInstallationStatus(this.fIStatus.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
      console.log();

      this.filee = data.content;
    })

  }

  filterInstallationStatus() {
    this.fileService.getFileByInstallationStatus(this.iStatus.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
      console.log();

      this.filee = data.content;
    })

  }

  filterCommissioningStatus() {
    this.fileService.getFileByCommissioningStatus(this.cStatus.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
      console.log();

      this.filee = data.content;
    })

  }

  filterCommissionedBy() {
    this.fileService.getFileByCommissionedBy(this.cBy.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
      console.log();

      this.filee = data.content;
    })

  }
  onPagenation(event: PageEvent) {
    console.log(event);
    console.log(event.pageIndex);
    if (this.tick1 == false) {
      console.log("IF block");

      this.fileService.getFile(event.pageIndex, event.pageSize).subscribe((data: any) => {
        this.filee = data['content'];
      })
    }
    else {
      console.log("ELSE BLOCK");
      if(this.cName==null){
        console.log("cName null hai");
        
      }
     
      this.fileService.getFileByCustomerName(this.cName.nativeElement.value, event.pageIndex, event.pageSize).subscribe((data: any) => {
        this.totalElement=data.totalElements;
        console.log("data"+data.totalElements);
        console.log("this"+this.totalElement);
        this.filee = data['content'];
      })
    }
  }


  next() {

    if (this.tick1 == false || this.cName.nativeElement.value == "") {
      this.pageNumber += 1;
      console.log(this.isEmpty);

      this.fileService.getFile(this.pageNumber, this.pageSize).subscribe((data: any) => {
        if (data.empty == false) {
          if (this.pageNumber <= this.totalPage) {
            console.log(this.pageNumber + "page number is " + data.totalPages + " this.clicks=false" + this.totalPage);
            this.totalElement = data['totalElements'];
            console.log(this.totalElement);

            this.filee = data['content'];
            this.totalPage += 1;

          }
        }
        //   else {
        //     if(this.pageNumber>data.totalPages){
        //       console.log("done");
        //     this.clicks = true;
        //    }
        //  }
      }
        , (error) => {
          console.log(error.error.message)
        });


    } else {
      // console.log("pageNumber"+this.pageNumber)
      this.pageNumber += 1;
      console.log(this.isEmpty);

      this.fileService.getFileByCustomerName(this.cName.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
        if (data.empty == false) {
          if (this.pageNumber <= data.totalPages) {
            console.log(data.totalPages);
            this.filee = data.content;
          }
        }
        // else {
        //   this.clicks = true;
        // }
      });
    }

  }

  previous() {

    if (this.search.nativeElement.value == "") {
      if (this.pageNumber > 0) {
        this.pageNumber -= 1;
        this.fileService.getFile(this.pageNumber, this.pageSize).subscribe((data: any) => {
          this.filee = data['content'];
          // }
        }, (error) => {
          console.log(error.error.message)
        });
      }


    } else {

      if (this.pageNumber > 0) {
        this.pageNumber -= 1;
        this.fileService.getFileByKeyword(this.search.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
          this.filee = data.content;

        })
      }
    }
  }


  showList() {
    this.fileService.getFile(this.pageNumber, this.pageSize).subscribe(
      (data: any) => {

        this.filee = data.content;
        this.pageNumber = data.number;
        this.pageSize = data.size;
        this.totalElement = data.totalElements;
        this.totalPage = data.totalPages - 1;
        this.isEmpty = data.empty;
      });
  }

  deleteItem(srNo: any) {
    this.fileService.deleteRow(srNo).subscribe(
      data => {
        console.log(data);
        alert("Deleted")
        this.showList();
      })
  }

  updateItem(srNo: number) {
    this.router.navigate(['update', srNo]);
  }

  viewItem(srNo: number) {
    this.router.navigate(['view', srNo])
  }

  downloadFile() {
    this.fileService.downloadFile().subscribe(blob => saveAs(blob, "Sample" + ".xlsx"));
  }

  ifClick1() {
    this.tick1 = true;
  }
  elseClick1() {
    console.log("False");
    this.tick1 = false;
    this.showList();
   
    
  }
  ifClick2() {
    this.tick2 = true;

  }
  elseClick2() {
    console.log("False");
    this.tick2 = false;
    this.showList();
  }

  ifClick3() {
    this.tick3 = true;

  }
  elseClick3() {
    console.log("False");
    this.tick3 = false;
    this.showList();
  }

  ifClick4() {
    this.tick4 = true;
    this.showList();

  }
  elseClick4() {
    console.log("False");
    this.tick4 = false;
    this.showList();
  }

  ifClick5() {
    this.tick5 = true;

  }
  elseClick5() {
    console.log("False");
    this.tick5 = false;
    this.showList();
  }

  ifClick6() {
    this.tick6 = true;

  }
  elseClick6() {
    console.log("False");
    this.tick6 = false;
    this.showList();
  }

  ifClick7() {
    this.tick7 = true;

  }
  elseClick7() {
    console.log("False");
    this.tick7 = false;
    this.showList();
  }

  ifClick8() {
    this.tick8 = true;

  }
  elseClick8() {
    console.log("False");
    this.tick8 = false;
    this.showList();
  }

  ifClick9() {
    this.tick9 = true;

  }
  elseClick9() {
    console.log("False");
    this.tick9 = false;
    this.showList();
  }

  ifClick10() {
    this.tick10 = true;

  }
  elseClick10() {
    console.log("False");
    this.tick10 = false;
    this.showList();
  }

  ifClick11() {
    this.tick11 = true;

  }
  elseClick11() {
    console.log("False");
    this.tick11 = false;
    this.showList();
  }

  ifClick12() {
    this.tick12 = true;

  }
  elseClick12() {
    console.log("False");
    this.tick12 = false;
    this.showList();
  }

  ifClick13() {
    this.tick13 = true;

  }
  elseClick13() {
    console.log("False");
    this.tick13 = false;
    this.showList();
  }

  ifClick14() {
    this.tick14 = true;

  }
  elseClick14() {
    console.log("False");
    this.tick14 = false;
    this.showList();
  }

  ifClick15() {
    this.tick15 = true;

  }
  elseClick15() {
    console.log("False");
    this.tick15 = false;
    this.showList();
  }

 




}


