import { Component, OnInit } from '@angular/core';
import { animate, trigger, state, style, query, group, transition } from '@angular/animations';

const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-10%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(10%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
      optional: true,
    }),
  ]),
];

@Component({
  selector: 'app-rotate-image',
  templateUrl: './rotate-image.component.html',
  styleUrls: ['./rotate-image.component.css'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-250deg)' })),
      transition('default => rotated', animate('400ms ease-in')),
      transition('rotated => default', animate('400ms ease-out')),
      transition(':increment', right),
      transition(':decrement', left),
    ]
    )
  ]
})
export class RotateImageComponent implements OnInit {

  state: string = 'default';
  counter : any;

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
    this.counter = ":decrement";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
