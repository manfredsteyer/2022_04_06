import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import { SharedclickWithWarningDirective } from '../sharedclick-with-warning.directive';
import {CityPipe} from './pipes/city.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
    SharedclickWithWarningDirective
  ],
  exports: [
    CityPipe,
    SharedclickWithWarningDirective
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }

  static forChild(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }

}
