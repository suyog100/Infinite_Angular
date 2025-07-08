import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core"

import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";

/// THis is functional based guard
export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  router.navigate([""])
  
  return false;
};



// // yo chai class ma halera guard use garne
// export class AuthGuard implements CanActivate {
//   canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): MaybeAsync<GuardResult> {
//     return true
//   }
// }