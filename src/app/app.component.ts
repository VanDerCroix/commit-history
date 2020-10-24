import { Component } from '@angular/core';
import { CommitService } from './services/commit.service';
import Commit from './interfaces/commit.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'commit-history';
  user = 'vandercroix';
  repo = 'commit-history';
  listCommits: Commit[];

  constructor(private commitService: CommitService) {
  	this.commitService
  		.getAll(this.user, this.repo)
  		.subscribe(
  			(result) => {
  				this.listCommits = result;
  			}
  		);
  }
}
