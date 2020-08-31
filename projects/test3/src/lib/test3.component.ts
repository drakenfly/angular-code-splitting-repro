import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test3',
  template: `
    <p>
      test3 works!
    </p>

    <div>
      From test2-lib:
      <lib-test2></lib-test2>
    </div>
  `,
  styles: [
  ]
})
export class Test3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
