import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MasterVisionComponent } from './master-vision/master-vision.component';
//路由控制
const routes: Routes = [{

  path: '',
  component: MasterVisionComponent
},{

  path: 'portfolio',
  component: PortfolioComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
