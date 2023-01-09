import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserX } from './user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Base url
  baseurl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // GET
  GetUser(id: number): Observable<UserX> {
    return this.http
      .get<UserX>(this.baseurl + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // GET
  GetUsers(): Observable<UserX> {
    return this.http
      .get<UserX>(this.baseurl)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Error handling
  errorHandl(error: ErrorEvent ) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.error.status}\nMessage: ${error.error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}