
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileListComponent } from './file/file-list/file-list.component';
import { UpdateFileComponent } from './file/update-file/update-file.component';
import { InsertRowComponent } from './file/insert-row/insert-row.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileService } from './service/file.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './file/home/home.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { ViewComponent } from './file/view/view.component';
import { FilterPipe } from './filter.pipe';
import { NavbarComponent } from './file/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    UpdateFileComponent,
    InsertRowComponent,
    HomeComponent,
    ViewComponent,
    FilterPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
