import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import  { ApplicationModel } from '../models/application-model';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppServicesService {

  applications: ApplicationModel[];

  constructor(private http: Http) { 
    
  }

  setupApplications() {
    this.applications = [
      {
        applicationName: "Document Services",
        itgLink: "http://webitg3.mutualofomaha.com/NBS_eApp_Doc_Service_Web/EAppDocumentServiceService/EAppDocumentServiceService.wsdl",
        catLink: "http://webcat3.mutualofomaha.com/NBS_eApp_Doc_Service_Web/EAppDocumentServiceService/EAppDocumentServiceService.wsdl",
        prdLink:"http://webprod3.mutualofomaha.com/NBS_eApp_Doc_Service_Web/EAppDocumentServiceService/EAppDocumentServiceService.wsdl",
        type:"service",
        statusCode:["","",""]
      },
      {
        applicationName: "Quote Services",
        itgLink: "",
        catLink: "",
        prdLink:"",
        type:"service",
        statusCode:["","",""]
      },
      {
        applicationName: "Data Services",
        itgLink: "",
        catLink: "",
        prdLink:"",
        type:"service",
        statusCode:["","",""]
      },
      {
        applicationName: "Producer Services",
        itgLink: "",
        catLink: "",
        prdLink:"",
        type:"service",
        statusCode:["","",""]
      },
      {
        applicationName: "ODS Services",
        itgLink: "",
        catLink: "",
        prdLink:"",
        type:"service",
        statusCode:["","",""]
      }
    ]

  }

  getApplications() {
    this.setupApplications();
    return this.applications;
  }

  pingServiceUrl(application:ApplicationModel, env:string) {
    if (env.toLowerCase() === 'itg' && application.itgLink != '') {
     return this.pingUrl(application.itgLink); 
    } else if (env.toLowerCase() === 'cat' && application.catLink != '') {
      return this.pingUrl(application.catLink);
    } else if (env.toLowerCase() === 'prd' && application.prdLink != '') {
      return this.pingUrl(application.prdLink);
    } else {
      return null;
    }
  }

  pingUrl(url) {
    return this.http.get(url).map((resp: Response) => {
      console.log(resp["url"]);//.json());
      return resp;

    })
  }

}
