import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from './../../services/repositories/repositories.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchUsername;
  public userSearched;

  constructor(
    private formBuilder: FormBuilder,
    public repositoriesService: RepositoriesService,
  ) { }

  ngOnInit() {
    this.searchUsername = this.formBuilder.group({
      username: [''],
    })
  }

  onSubmit() {
    this.repositoriesService.getRepositories(this.searchUsername.value.username);

    this.userSearched = this.searchUsername.value.username;
  }

}
