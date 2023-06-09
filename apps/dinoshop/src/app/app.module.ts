import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

//Pages
import { HomePageComponent } from './pages/home-page/home-page.component';

//Shared
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { MessagesComponent } from './shared/messages/messages.component';

//Modules
import { UiModule } from '@dino/ui';
import { OrdersModule } from '@dino/orders';
import { ProductsModule } from '@dino/products';
import { UsersModule, JwtInterceptor } from '@dino/users';

//PrimeNG
import { AccordionModule } from 'primeng/accordion';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AccordionModule,
    UiModule,
    ProductsModule,
    OrdersModule,
    ToastModule,
    UsersModule,
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
