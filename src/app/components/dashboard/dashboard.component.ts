import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../../services/app-services.service';
import { ApplicationModel } from '../../models/application-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  applications: ApplicationModel[];
  openModal = true;
  applicationInfo = {
    "name":"","url":"", "status":""
  }

  constructor(private appService:AppServicesService) { 
    
  }

  ngOnInit() {
    this.applications = this.appService.getApplications();
  }

  testLink(app:ApplicationModel, env) {
    try {
      this.appService.pingServiceUrl(app,env).subscribe(
        (resp) => {
          console.log('Returned...' + resp["status"]);
          app.statusCode[env] = resp["status"]+"";
        },
        ( msg ) => {
          console.log('Error ' + msg.status + ' ' + msg.statusText);
        }

      );
    } catch(e) {
      console.log(e);
    }

  }

  setAppInfo(app:ApplicationModel, env) {
    this.applicationInfo.name = app.applicationName;
    this.applicationInfo.status = app.statusCode[env];
    if (env == 'itg') {
      this.applicationInfo.url = app.itgLink;
    } else if (env == 'cat') {
      this.applicationInfo.url = app.catLink;
    } else if (env == 'prd') {
      this.applicationInfo.url = app.prdLink;
    }

  }


}
