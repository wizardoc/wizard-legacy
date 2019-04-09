import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { MainComponent } from "../components/main/main.component";
import { PageNotFoundPage } from "../pages/index";

const appRoutes: Routes = [
  {
    path:'main',
    component: MainComponent
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundPage
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  declarations:[
    MainComponent,
    PageNotFoundPage
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {}
