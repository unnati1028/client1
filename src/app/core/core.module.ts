import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/layout/header/header.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { LandingComponent } from './component/layout/landing/landing.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LandingComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, LandingComponent, FooterComponent], //it will ensure list of componenent that can be accessible  to the outside world
})
export class CoreModule {}
