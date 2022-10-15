import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {

  // store the caching value of request and response
  cacheMap = new Map<string, HttpResponse<any>>();

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // 
    if (this.isRequestCachable(request)) {
      // our req. need to be cache
      // check request url is exist or not
      const url = request.url.toLowerCase();
      if (this.cacheMap.has(url)) {
        // exist
        const res = this.cacheMap.get(url) as HttpResponse<any>;
        return of(res);
      }
      else {
        // not exist
        return next.handle(request).pipe(
          tap(event => {
            if (event instanceof HttpResponse) {
              // set the response to the key
              this.cacheMap.set(url, event);
            }
          })
        );
      }
    }
    else {
      // default work
      return next.handle(request);
    }

  }

  private isRequestCachable(request: HttpRequest<unknown>): boolean {
    if (request.method === 'GET') {
      // filter code
      return true;
    }
    return false;
  }
}
