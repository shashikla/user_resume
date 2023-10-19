import { Component, OnInit, Input, ViewChild } from '@angular/core';
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

export interface Section {
  name: string;
  updated: Date;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('openClose', [
      // transition('* => *',[
      //   query(':enter', [style({ transform: 'translateX(-100%)' }), animate('1s ease-out', style({ transform: 'translateX(-10%)' }))], {
      //     optional: true,
      //   }),
      // ])
      state('open', style({ transform: 'translateX(-10%)' })),
      state('closed', style({ transform: 'translateX(-100%)' })),
      transition('open => closed', animate('1s ease-out', style({ transform: 'translateX(0%)' }))),
      transition('closed => open', animate('1s ease-out', style({ transform: 'translateX(-10%)' }))),
    ])
  ]
})


// state('open', style({ transform: 'translateX(-10%)' })),
// state('closed', style({ transform: 'translateX(-100%)' })),
// transition('open => closed', animate('1s ease-out', style({ transform: 'translateX(0%)' }))),
// transition('closed => open', animate('1s ease-out', style({ transform: 'translateX(-10%)' }))),

export class HomeComponent implements OnInit {

  @Input() opened: boolean = true;
  @ViewChild('drawer') drawer:any;

  showFiller = false;
  state: string = 'closed';
  counter: any;

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }
  rotate() {
    this.drawer.toggle();
      this.showFiller = true;
    // this.state = (this.state === 'closed' ? 'open' : 'closed');
    // this.counter = ":increment";
  }

}
