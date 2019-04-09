import {NgModule} from '@angular/core'
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader'
import {ServerModule} from '@angular/platform-server'

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
  ]
})
export class AppServerModule {}
