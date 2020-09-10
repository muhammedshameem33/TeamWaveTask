import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MATERIALS=[
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSnackBarModule
]

@NgModule({
  imports: [
    MATERIALS
  ],
  exports:[
    MATERIALS
  ]
})
export class MaterialModule { }
