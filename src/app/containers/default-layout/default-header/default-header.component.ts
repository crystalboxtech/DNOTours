import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
   username :any;

  constructor(private classToggler: ClassToggleService,private router: Router,) {
    super();
  
  }
  ngOnInit(){
     this.username= sessionStorage.getItem('user_name');
   }
  
   logout(){
    window.sessionStorage.clear();

    this.router.navigate(['Home']);
    
  }
  website(){
    
    this.router.navigate(['Home']);
  }
  
}
