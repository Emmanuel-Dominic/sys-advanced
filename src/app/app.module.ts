import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { DirectiveComponent } from './directive/directive.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OffersModule } from './offers/offers.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { ProductsComponent } from './products/products.component';
import { PromisesComponent } from './promises/promises.component';
import { ObservablesComponent } from './observables/observables.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';
import { SomeDataComponent } from './some-data/some-data.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokensInterceptor } from './services/tokens.interceptor';
import { TrackbyNgforComponent } from './trackby-ngfor/trackby-ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AdminComponent,
    FooterComponent,
    DirectiveComponent,
    NotFoundComponent,
    AccessDeniedComponent,
    EditAboutComponent,
    ProductsComponent,
    PromisesComponent,
    ObservablesComponent,
    ForkjoinComponent,
    SomeDataComponent,
    TrackbyNgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OffersModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokensInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
