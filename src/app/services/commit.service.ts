import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import config from '../../assets/config.json';
import Commit from '../interfaces/commit.interface';

@Injectable({
  providedIn: 'root',
})
export class CommitService {
 	constructor(private http: HttpClient) {}

 	getAll(
 		user: string,
 		repo: string
 	): Observable<any> {
 		const url = `${config.githubPath}/repos/${user}/${repo}/commits`; 
 		const resp = this.http.get(url);//.pipe(pluck('result'));
 		return resp;
 	}
}
