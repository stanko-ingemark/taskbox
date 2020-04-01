import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pure-inbox-screen',
  templateUrl: './pure-inbox-screen.component.html'
})
export class PureInboxScreenComponent implements OnInit {
  @Input() error: any;

  constructor() {}

  ngOnInit() {}
}
