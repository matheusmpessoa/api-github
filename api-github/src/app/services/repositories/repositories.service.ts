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
  public currentUsername;
  public repositories;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getRepositories(username: string) {
    const getResponseAPI = this.http.get<any>(Endpoints.usersURL + username + '/repos');

    getResponseAPI.subscribe(
      response => {
        if (response) {
          console.warn(response);
        }
      }
    )

  }
}
