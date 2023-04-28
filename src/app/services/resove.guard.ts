import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, ResolveFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
class PermissionsService {
  constructor(private dataService: DataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string>|Promise<string>|string {
    return this.dataService.getData();
  }
}

export const ResolveGuard: ResolveFn<string> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string>|Promise<string>|string => {
  return inject(PermissionsService).resolve(route, state);
}
