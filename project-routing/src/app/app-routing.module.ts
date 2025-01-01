import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageWithParametersComponent } from './pages/page-with-parameters/page-with-parameters.component';
import { PrivatePageComponent } from './pages/private-page/private-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "page-a",  component: PageAComponent},
  {path: "page-b",  component: PageBComponent},
  {path: "page-with-parameters/:id",  component: PageWithParametersComponent},
  {path: 'lazy-loading', loadChildren: () => import('./modules/lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  {path: "private-page",  component: PrivatePageComponent},
  {path: "login", component: LoginComponent},
  {path: "", redirectTo: "/page-a", pathMatch: "full"},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
