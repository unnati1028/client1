import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpInterceptor } from '../shared/interceptor';
import { ProfileService } from './services/profile.service';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';

@NgModule({
  declarations: [
    CreateProfileComponent
  ],
  imports: [HttpClientModule, CommonModule, ProfileRoutingModule],
providers: [ProfileService,httpInterceptor]
})
export class ProfileModule {}
