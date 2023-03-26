import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  options: any[] = [];
  selectedOption: string = '';
  isToggled: boolean = false;

  ngOnInit(): void {
    this.setOptions();
  }

  setOptions() {
    this.options = [
      {
        name: 'Dashboard',
        icon: '../../../assets/images/dashboard.svg',
        path: '',
      },
      {
        name: 'Rides',
        icon: '../../../assets/images/user-clock.svg',
        path: 'rides',
      },
      {
        name: 'Clients',
        icon: '../../../assets/images/users.svg',
        path: '',
      },
      {
        name: 'Drivers',
        icon: '../../../assets/images/driver.svg',
        path: '',
      },
      {
        name: 'Shift',
        icon: '../../../assets/images/dollar-coin.svg',
        path: '',
      },
      {
        name: 'Live map',
        icon: '../../../assets/images/map-navigation.svg',
        path: '',
      },
      {
        name: 'Car classes',
        icon: '../../../assets/images/car.svg',
        path: '',
      },
      {
        name: 'Branches',
        icon: '../../../assets/images/branch.svg',
        path: '',
      },
      {
        name: 'Moderators',
        icon: '../../../assets/images/moderators.svg',
        path: '',
      },
      {
        name: 'Settings',
        icon: '../../../assets/images/settings.svg',
        path: '',
      },
    ];
  }

  toggle(): boolean {
    return this.isToggled = !this.isToggled;
  } 
}
