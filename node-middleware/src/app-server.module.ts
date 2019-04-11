import {NgModule} from '@angular/core'
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader'
import {ServerModule} from '@angular/platform-server'
import {APP_BASE_HREF} from '@angular/common'

import {AppModule} from '../../client/src/app/app.module'
import {AppComponent} from '../../client/src/app/app.component'

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  bootstrap:[
    AppComponent
  ],
  providers:[
    {provide:APP_BASE_HREF, useValue:'/'}
  ]
})
export class AppServerModule {}
