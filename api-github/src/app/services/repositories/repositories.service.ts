import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Endpoints } from './../../../environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  public userData;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getRepositories(username: string) {
    return this.http.get<any>(Endpoints.usersURL + username + '/repos')
      .subscribe(
        response => {
          if (response) {
            // let userData = response.map(function(userData) {
            //   console.log(userData);
            //   return userData;
            // });
            console.log(response);
            this.userData = response;
          }
        }
      )
  }

}
