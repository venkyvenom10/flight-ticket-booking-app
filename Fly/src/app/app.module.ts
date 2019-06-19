import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule,MatFormFieldModule, MatFormFieldControl, MatInputModule, MatIconModule, MatNativeDateModule, MatAutocompleteModule, MatToolbarModule, MatTableModule, MatSortModule, MatSelectModule, MatLabel, MatDividerModule, MatCheckbox, MatCheckboxModule} from '@angular/material'
import { NoopAnimationPlayer } from '@angular/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { searchComponent } from './signup/search/search.component';
import { HeaderComponent } from './header/header.component';
import { FlightdetailsComponent } from './flightdetails/flightdetails.component';
import { FooterComponent } from './header/footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './about-us/help/help.component';
import { FilterComponent } from './filter/filter.component';
import {MatSliderModule} from '@angular/material/slider';
import {Ng5SliderModule} from 'ng5-slider';
import 'hammerjs';
import { ReviewdetailsComponent } from './flightdetails/reviewdetails/reviewdetails.component';



const routes: Routes = [
  //  { path: '', pathMatch: 'full', redirectTo: 'Signin'},
  { path: 'Signin', component: SigninComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'About', component: AboutUsComponent },
  { path: 'Help', component: HelpComponent },
  {path:'search', component:searchComponent},
  {path:'flightdetails', component:FlightdetailsComponent},
  {path:'reviewdetails',component:ReviewdetailsComponent},
  {path:'filter', component:FilterComponent},

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
    AboutUsComponent,
    HelpComponent,
    FilterComponent,
    ReviewdetailsComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),ReactiveFormsModule,MatCardModule
    ,MatFormFieldModule,MatInputModule,BrowserAnimationsModule,MatIconModule,MatButtonModule,
    MatRadioModule,MatDatepickerModule,MatNativeDateModule,MatAutocompleteModule,MatToolbarModule,
    MatTableModule,MatButtonModule,
    MatSortModule,MatSliderModule,Ng5SliderModule,MatSelectModule,MatDividerModule,MatCheckboxModule
  ],
  providers: [],
  exports:[RouterModule,MatCardModule
    ,MatFormFieldModule,MatInputModule,BrowserAnimationsModule,MatIconModule,MatButtonModule,
    MatRadioModule,MatDatepickerModule,MatNativeDateModule,MatAutocompleteModule,MatToolbarModule,
    MatTableModule,MatButtonModule,MatDividerModule,MatCheckbox,
    MatSortModule,MatSliderModule,Ng5SliderModule,MatSelectModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
