import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileListComponent } from './file/file-list/file-list.component';
import { InsertRowComponent } from './file/insert-row/insert-row.component';

const routes: Routes = [
  {path:'',redirectTo:'file',pathMatch:'full'},
  {path:'add',component:InsertRowComponent},
  {path:"show",component:FileListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
