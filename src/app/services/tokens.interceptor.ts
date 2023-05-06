import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable()
export class TokensInterceptor implements HttpInterceptor {

  auth_token = 'ysuwIHsdedw3Q7djiayq7asj8w4y82q';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenizedReq = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`
      }
    });
    return next.handle(tokenizedReq).pipe(
      retry(1),
      catchError((err: HttpErrorResponse) => {
        console.log('Route user to error page');
        return throwError(() => err.message);
      })
    );
  }
}
