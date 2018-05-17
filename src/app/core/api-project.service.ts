import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiProjectService {
	url = 'api/';
	constructor(private httpClient: HttpClient) {}
	getResource<T>(resource: string): Observable<T[]> {
		return this.httpClient.get<T[]>(this.url + resource);
	}
}
