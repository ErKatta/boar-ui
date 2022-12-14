import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = [
    {
      name: 'Allenamenti',
      icon: 'sports_handball',
      route: 'training-home-page',
    },
    { name: 'Gare', icon: 'sports_rugby', route: 'training-home-page' },
    { name: 'Atleti', icon: 'person', route: 'athletes-home-page' },
    { name: 'Statistiche', icon: 'query_stats', route: 'training-home-page' },
    { name: 'Report', icon: 'summarize', route: 'training-home-page' },
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
