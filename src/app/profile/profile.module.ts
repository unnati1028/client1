import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpInterceptor } from '../shared/interceptor';
import { ProfileService } from './services/profile.service';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateProfileComponent
  ],
  imports: [FormsModule,HttpClientModule, CommonModule, ProfileRoutingModule],
providers: [ProfileService,httpInterceptor]
})
export class ProfileModule {}
