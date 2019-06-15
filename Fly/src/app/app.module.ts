import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule,MatFormFieldModule, MatFormFieldControl, MatInputModule, MatIconModule, MatNativeDateModule, MatAutocompleteModule, MatToolbarModule, MatTableModule, MatSortModule} from '@angular/material'
import { NoopAnimationPlayer } from '@angular/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { searchComponent } from './signup/search/search.component';
import { HeaderComponent } from './header/header.component';
import { FlightdetailsComponent } from './flightdetails/flightdetails.component';
import { FooterComponent } from './header/footer/footer.component';


const routes: Routes = [
  //  { path: '', pathMatch: 'full', redirectTo: 'Signin'},
  { path: 'Signin', component: SigninComponent },
  { path: 'Signup', component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    searchComponent,
    HeaderComponent,
    FlightdetailsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),ReactiveFormsModule,MatCardModule
    ,MatFormFieldModule,MatInputModule,BrowserAnimationsModule,MatIconModule,MatButtonModule,
    MatRadioModule,MatDatepickerModule,MatNativeDateModule,MatAutocompleteModule,MatToolbarModule,
    MatTableModule,MatButtonModule,
    MatSortModule
  ],
  providers: [],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
