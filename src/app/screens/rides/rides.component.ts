import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent implements OnInit {
  columns: string[] = [
    'Users', 
    'Car confort', 
    'Ordered Time', 
    'Start Location',
    'Finish Location',
    'Income'
  ];

  rides: any[] = [
    {
      user: {
        name: 'Sierra Ferguson',
        phone: '+998 (99) 436-46-15',
        image: 'https://randomuser.me/api/portraits/women/34.jpg',
      },
      carConfort: 'simple',
      orderedTime: new Date(),
      startLocation: '21 Hamidula',
      finishLocation: 'Ozbekinson',
      income: '50.30',
    },
    {
      user: {
        name: 'Sierra Ferguson',
        phone: '+998 (99) 436-46-15',
        image: 'https://randomuser.me/api/portraits/women/40.jpg',
      },
      carConfort: 'otra',
      orderedTime: new Date(),
      startLocation: 'Nowhere',
      finishLocation: 'Anywhere',
      income: '3',
    },
    {
      user: {
        name: 'Sierra Ferguson',
        phone: '+998 (99) 436-46-15',
        image: 'https://randomuser.me/api/portraits/women/25.jpg',
      },
      carConfort: 'convenient',
      orderedTime: new Date(),
      startLocation: 'Porahi',
      finishLocation: 'Guapulo',
      income: '5',
    },
    {
      user: {
        name: 'Sierra Ferguson',
        phone: '+998 (99) 436-46-15',
        image: 'https://randomuser.me/api/portraits/women/92.jpg',
      },
      carConfort: 'simple',
      orderedTime: new Date(),
      startLocation: '21 Hamidula',
      finishLocation: 'Ozbekinson',
      income: '50.30',
    },
    {
      user: {
        name: 'Sierra Ferguson',
        phone: '+998 (99) 436-46-15',
        image: 'https://randomuser.me/api/portraits/women/78.jpg',
      },
      carConfort: 'otra',
      orderedTime: new Date(),
      startLocation: 'Nowhere',
      finishLocation: 'Anywhere',
      income: '3',
    },
    {
      user: {
        name: 'Sierra Ferguson',
        phone: '+998 (99) 436-46-15',
        image: 'https://randomuser.me/api/portraits/women/34.jpg',
      },
      carConfort: 'convenient',
      orderedTime: new Date(),
      startLocation: 'Porahi',
      finishLocation: 'Guapulo',
      income: '5',
    },
    {
      user: {
        name: 'Sierra Ferguson',
        phone: '+998 (99) 436-46-15',
        image: 'https://randomuser.me/api/portraits/women/46.jpg',
      },
      carConfort: 'simple',
      orderedTime: new Date(),
      startLocation: '21 Hamidula',
      finishLocation: 'Ozbekinson',
      income: '50.30',
    },
    {
      user: {
        name: 'Sierra Ferguson',
        phone: '+998 (99) 436-46-15',
        image: 'https://randomuser.me/api/portraits/women/9.jpg',
      },
      carConfort: 'otra',
      orderedTime: new Date(),
      startLocation: 'Nowhere',
      finishLocation: 'Anywhere',
      income: '3',
    },
    {
      user: {
        name: 'Sierra Ferguson',
        phone: '+998 (99) 436-46-15',
        image: 'https://randomuser.me/api/portraits/women/22.jpg',
      },
      carConfort: 'convenient',
      orderedTime: new Date(),
      startLocation: 'Porahi',
      finishLocation: 'Guapulo',
      income: '5',
    },
    {
      user: {
        name: 'Sierra Ferguson',
        phone: '+998 (99) 436-46-15',
        image: 'https://randomuser.me/api/portraits/women/7.jpg',
      },
      carConfort: 'simple',
      orderedTime: new Date(),
      startLocation: '21 Hamidula',
      finishLocation: 'Ozbekinson',
      income: '50.30',
    },
    {
      user: {
        name: 'Sierra Ferguson',
        phone: '+998 (99) 436-46-15',
        image: 'https://randomuser.me/api/portraits/women/16.jpg',
      },
      carConfort: 'otra',
      orderedTime: new Date(),
      startLocation: 'Nowhere',
      finishLocation: 'Anywhere',
      income: '3',
    },
    {
      user: {
        name: 'Sierra Ferguson',
        phone: '+998 (99) 436-46-15',
        image: 'https://randomuser.me/api/portraits/women/48.jpg',
      },
      carConfort: 'convenient',
      orderedTime: new Date(),
      startLocation: 'Porahi',
      finishLocation: 'Guapulo',
      income: '5',
    },
  ];

  pages: number[] = [];
  currentPage: number = 1;
  lastPage: number = 1;
  firstRegister: number = 0;
  lastRegister: number = 5;

  ngOnInit(): void {
    this.dynamicPages();
  }

  dynamicPages() {
    const ridesSize = this.rides.length;
    const pages = Math.ceil(ridesSize / 5);
    this.lastPage = pages;

    for (let i = 0; i < pages; i++) {
      this.pages.push(i + 1);
    }
  }

  paginate(page: number) {
    this.currentPage = page;
    this.firstRegister = (page - 1) * 5;
    this.lastRegister = page * 5;
  }
}
