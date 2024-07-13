import { Component } from '@angular/core';

// import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
 public navItems: any = [];
 constructor() {
    var user_name = sessionStorage.getItem('user_name');
    var Usertype_code = sessionStorage.getItem('Usertype_code');
    if (Usertype_code?.toString() == '4') {
    this.navItems = [
       {
          name: 'My Trip',
          url: '/pages/mytour',
          iconComponent: { name: 'cil-user' }
        }
      ];
      }
    else {
      this.navItems = [
        {
          name: 'Dashboard',
          url: '/dashboard',
          iconComponent: { name: 'cil-speedometer' },

        },

        {
          name: 'Tour',
          url: '/tour',
          iconComponent: { name: 'cil-location-pin' },
          children: [
            {
              name: 'Add-Tour',
              url: '/tour/add-Tour/0'
            },
            {
              name: 'Display-Tour',
              url: '/tour/display-Tour'
            }

          ]
        },

        {
          name: 'Booking',
          url: '/pages/mytour',
          iconComponent: { name: 'cil-puzzle' }
        },


        {
          name: 'User',
          url: '/user/member',
          iconComponent: { name: 'cil-user' }
        },


        {
          name: 'Coupan',
          url: '/coupan/coupan',
          iconComponent: { name: 'cil-puzzle' }
        },
        {
          name: 'Tour Type',
          url: '/type/tourtype',
          iconComponent: { name: 'cil-cursor' }
        },

      ];

    }

  }
}

