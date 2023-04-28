import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
class PermissionsService {
  userRole = 'user'
  constructor(private router: Router) {}

  canDeactivate(
      component: unknown,
      currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
      nextState: RouterStateSnapshot
    ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
      let response = confirm("Are you sure you want to leave");
      if(response == true) {
        return true;
      }else {
        return false;
      }
  }
}

export const notCompleteGuard: CanDeactivateFn<unknown> = (component: unknown,
      currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
      nextState: RouterStateSnapshot
    ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree  => {
  return inject(PermissionsService).canDeactivate(component, currentRoute, currentState, nextState);
}
