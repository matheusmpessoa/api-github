import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from './../../services/repositories/repositories.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchUsernameForm;
  public userSearched;
  public responseObj;
public messageError;
  constructor(
    private formBuilder: FormBuilder,
    public repositoriesService: RepositoriesService,
  ) { }

  ngOnInit() {
    this.searchUsernameForm = this.formBuilder.group({
      username: [''],
    })
  }

  onSubmit() {
    this.repositoriesService.getRepositories(this.searchUsernameForm.value.username)
      .subscribe(
        response => {
          if (response) {
            // let userData = response.map(function(userData) {
            //   console.log(userData);
            //   return userData;
            // });
            this.responseObj = response;
            this.messageError = null;
            console.log(this.responseObj);
          }
        },
        error => {
          this.responseObj = null;
          this.userSearched = null;          
          this.messageError = "Usuário não encontrado. Tente novamente!!";
        }
      )

    this.userSearched = this.searchUsernameForm.value.username;
  }

}
