import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Endpoints } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  public messageError: string;
  public userData;

  constructor(
    private http: HttpClient
  ) { }

  getRepositories(username: string) {
    return this.http.get<any>(Endpoints.usersURL + username + '/repos');
  }

}
