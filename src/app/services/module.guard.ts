import { Injectable, inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
class PermissionsService {
  userRole = 'admin'
  constructor(private router: Router) {}

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ) {
    if(this.userRole !== 'admin'){
      this.router.navigate(['access-denied'])
    }
    return true;
  }
}

export const moduleGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  return inject(PermissionsService).canMatch(route, segments);
}
