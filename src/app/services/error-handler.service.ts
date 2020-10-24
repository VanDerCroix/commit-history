import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import config from '../../assets/config.json';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {
  constructor(private router: Router) {}

  handleError(error: Error | HttpErrorResponse): void {
    if (error instanceof HttpErrorResponse) {
      console.log(error);
    } else {
      if (config.environment !== 'development') {
        console.log(error);
      }
    }
  }
}