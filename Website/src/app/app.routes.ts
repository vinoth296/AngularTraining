import { CanActivateChildFn, CanActivateFn, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { inject } from '@angular/core';
import { CommonService } from './common.service';
import { MaterilaComponent } from './materila/materila.component';
import { AngularPageLifecycleComponent } from './angular-page-lifecycle/angular-page-lifecycle.component';

const routegaurd:CanActivateFn=()=>{
    return inject(CommonService).checkToken();
}

export const routes: Routes = [
{path:"",component:LoginComponent},
{path:"home",component:HomeComponent,canActivate:[routegaurd]},
{path:"service",component:ServiceComponent},
{path:"contact",component:ContactComponent},
{path:"login",component:LoginComponent},
{path:"material",component:MaterilaComponent},
{path:"angularpagelifecycle",component:AngularPageLifecycleComponent},

{
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
},

];
