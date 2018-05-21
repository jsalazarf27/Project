import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
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

	deleteEmployee<T>(resource: string, id: number): Observable<T> {
		return this.httpClient
			.delete<T>(`${this.url + resource}/${id}`)
			.pipe(catchError(this.handleError<any>('Delete employee ${id}')));
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		};
	}
}
