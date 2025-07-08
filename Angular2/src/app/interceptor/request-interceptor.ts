import { HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  
  console.log(req, "request");

  let clonedRequest = req.clone({
    setHeaders: {
      Authorization: "randomTOken"
    }
  })


  return next(clonedRequest).pipe(
    
  );
};
