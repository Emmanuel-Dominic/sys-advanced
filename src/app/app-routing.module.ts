import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DirectiveComponent } from './directive/directive.component';
import { AdminComponent } from './admin/admin.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { AuthGuard } from './services/auth.guard';
import { RoleGuard } from './services/role.guard';
import { notCompleteGuard } from './services/not-complete.guard';
import { ProductsComponent } from './products/products.component';
import { ResolveGuard } from './services/resove.guard';
import { PromisesComponent } from './promises/promises.component';
import { ObservablesComponent } from './observables/observables.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';
import { SomeDataComponent } from './some-data/some-data.component';
import { TrackbyNgforComponent } from './trackby-ngfor/trackby-ngfor.component';
import { ToastrComponent } from './toastr/toastr.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivateChild: [RoleGuard],
    children: [{ path: 'edit', component: EditAboutComponent }]
  },
  {
    path: 'products',
    resolve: {data: ResolveGuard},
    component: ProductsComponent
  },
  {
    path: 'contact',
    canDeactivate: [notCompleteGuard],
    component: ContactComponent
  },
  {
    path: 'directive',
    component: DirectiveComponent
  },
  {
    path: 'promises',
    component: PromisesComponent
  },
  {
    path: 'observables',
    component: ObservablesComponent
  },
  {
    path: 'forkjoin',
    component: ForkjoinComponent
  },
  {
    path: 'intercepts',
    component: SomeDataComponent
  },
  {
    path: 'trackby-ngfor',
    component: TrackbyNgforComponent
  },
  {
    path: 'components',
    component: ToastrComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule),
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
