import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { AirTicketComponent } from './SideNavBar/air-ticket/air-ticket.component';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { OnDemandServicesFilComponent } from './SideNavBar/on-demand-services-fil/on-demand-services-fil.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AutoCareComponent } from './SideNavBar/auto-care/auto-care.component';
import { AutoMobileComponent } from './SideNavBar/auto-mobile/auto-mobile.component';
import { LoansComponent } from './SideNavBar/loans/loans.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ShoppingComponent } from './SideNavBar/shopping/shopping.component';
import { TrainComponent } from './SideNavBar/train/train.component';
import { BookComponent } from './SideNavBar/book/book.component';
import { BabyCareComponent } from './SideNavBar/baby-care/baby-care.component';
import { BusinessLoginComponent } from './Business/business-login/business-login.component';
import { BusinessHomeComponent } from './Business/business-home/business-home.component';
import { AddServiceComponent } from './Business/add-service/add-service.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    FooterComponent,
    CategoriesComponent,
    AirTicketComponent,
    OnDemandServicesFilComponent,
    AutoCareComponent,
    AutoMobileComponent,
    LoansComponent,
    ShoppingComponent,
    TrainComponent,
    BookComponent,
    BabyCareComponent,
    BusinessLoginComponent,
    BusinessHomeComponent,
    AddServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCommonModule,
    MatNativeDateModule,
    ToastrModule.forRoot(),
    MatSlideToggleModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
