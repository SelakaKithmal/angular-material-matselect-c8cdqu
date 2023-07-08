import { Component } from '@angular/core';

/** @title Select with reset option */
@Component({
  selector: 'select-reset-example',
  templateUrl: 'select-reset-example.html',
  styleUrls: ['select-reset-example.css'],
})
export class SelectResetExample {
  states: any[] = [
    { name: 'All Accounts', amount: 140853.47 },
    { name: 'Credit Card ', amount: '-455.15' },
  ];

  onSelectChange(value) {
    console.log(value);
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
