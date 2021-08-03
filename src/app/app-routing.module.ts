import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileListComponent } from './file/file-list/file-list.component';
import { HomeComponent } from './file/home/home.component';
import { InsertRowComponent } from './file/insert-row/insert-row.component';
import { UpdateFileComponent } from './file/update-file/update-file.component';
import { ViewComponent } from './file/view/view.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'add',component:InsertRowComponent},
  {path:"show",component:FileListComponent},
  {path:"home",component:HomeComponent},
  {path:"update/:srNo",component:UpdateFileComponent},
  {path:"view/:srNo",component:ViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
