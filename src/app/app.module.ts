import { CoreService } from './app-core.service';
import { IconRegistrationService } from './services/icon-registration.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './navigation/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CocktailsPreviewComponent } from './navigation/dashboard/card-previews/cocktails-preview/cocktails-preview.component';
import { DynamicComponentModule } from './directives/dynamic-component/dynamic-component.module';
import { HttpClientModule } from '@angular/common/http';
import { CocktailsPage } from './pages/cocktails/cocktails.component';

import { NgxTypedJsModule } from 'ngx-typed-js';
import { MemesPreviewComponent } from './navigation/dashboard/card-previews/memes-preview/memes-preview.component';
import { MemesPage } from './pages/memes/memes.component';
import { MatDividerModule } from '@angular/material/divider';
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';
import { PageNavigation } from './navigation/pagenav/pagenav.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    CocktailsPreviewComponent,
    CocktailsPage,
    PageNavigation,
    MemesPreviewComponent,
    MemesPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    DynamicComponentModule,
    MatIconModule,
    HttpClientModule,
    NgxTypedJsModule,
    MatGridListModule,
    MatDividerModule,
    LazyLoadImageModule,
    ClipboardModule,
    ScrollingModule,
    MatSnackBarModule,
    MatTooltipModule,
  ],
  providers: [CoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
