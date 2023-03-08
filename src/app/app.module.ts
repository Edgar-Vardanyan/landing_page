import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { OpenAccountComponent } from './components/open-account/open-account.component';
import { OpenAccountFormComponent } from './components/open-account-form/open-account-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TradingStepsComponent } from './components/trading-steps/trading-steps.component';
import { FinancialToolsComponent } from './components/financial-tools/financial-tools.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';
import { FeaturedCompanysComponent } from './components/featured-companys/featured-companys.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OpenAccountComponent,
    OpenAccountFormComponent,
    TradingStepsComponent,
    FinancialToolsComponent,
    SwiperComponent,
    FeaturedCompanysComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    SwiperModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
