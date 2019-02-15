import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatCardModule,MatListModule],
  exports: [MatButtonModule, MatCheckboxModule,MatCardModule,MatListModule],
})
export class MyMaterialModule { }