import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { TrainingHomePageComponent } from './training-home-page/training-home-page.component';
import { AthletesHomePageComponent } from './athletes-home-page/athletes-home-page.component';
import { AthleteProfileCardComponent } from './athlete-profile-card/athlete-profile-card.component';

const routes: Routes = [
  { path: '', component: TrainingHomePageComponent },
  { path: 'training-home-page', component: TrainingHomePageComponent },
  { path: 'athletes-home-page', component: AthletesHomePageComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
  ],
  declarations: [
    AppComponent,
    TrainingHomePageComponent,
    AthletesHomePageComponent,
    AthleteProfileCardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
