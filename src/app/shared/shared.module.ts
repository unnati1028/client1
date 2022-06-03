import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptor/header.interceptor';
import { httpInterceptor } from './interceptor'; //it  will automactically refer  to index.ts file

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [httpInterceptor],
})
export class SharedModule {}
