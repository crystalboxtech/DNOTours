import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { HomeComponent } from './views/pages/home/home.component';
import { TourComponent } from './views/pages/tour/tour.component';
import { SummaryComponent } from './views/pages/summary/summary.component';
import { SummaryWithTypeComponent } from './views/pages/summary-with-type/summary-with-type.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { CustomerTourListComponent } from './views/pages/customer-tour-list/customer-tour-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./views/user/User.module').then((m) => m.UserModule)
      },
      {
        path: 'place',
        loadChildren: () =>
          import('./views/place/Place.module').then((m) => m.PlaceModule)
      },
      {
        path: 'coupan',
        loadChildren: () =>
          import('./views/coupan/Coupan.module').then((m) => m.CoupanModule)
      },
      {
        path: 'type',
        loadChildren: () =>
          import('./views/tourtype/tourtype.module').then((m) => m.TourtypeModule)
      },
      {
        path: 'tour',
        loadChildren: () =>
          import('./views/tour/tour.module').then((m) => m.TourModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Home Page'
    }
  },
 
  {
    path: 'Home',
    component: HomeComponent,
    data: {
      title: 'Home Page'
    }
  },
  {
    path: 'tour-list/:tour_code',
    component: TourComponent,
    data: {
      title: 'Tour Page'
    }
  },
  {
    path: 'all-tour/:tour_type',
    component: SummaryComponent,
    data: {
      title: 'Tour Page'
    }
  },
  {// tour_type_code for identifiy tour type or contry type 
    // tour_subtype_code for identifiy solo,friends,coupal 
    path: 'tour/:tour_type_code/:tour_subtype_code',
    component: SummaryWithTypeComponent,
    data: {
      title: 'Tour Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },

  
  {path: '**', redirectTo: 'Home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
