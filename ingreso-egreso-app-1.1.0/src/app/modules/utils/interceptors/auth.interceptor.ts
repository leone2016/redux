import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {FunctionsGeneric} from '../generics/functions.generic';
import {Observable} from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    @Inject(PLATFORM_ID) private _platformId: string
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    if (!token) {
      return next.handle(req);
    }
    token = `bearer ${JSON.parse(token).accessToken}`;
    const authReq = req.clone({
      setHeaders: {
        Authorization: token,
        Platform: this._platformId,
        Lang: FunctionsGeneric.getLang(),
        'application-url': window.location.host
      }
    });
    return next.handle(authReq);
  }
}
