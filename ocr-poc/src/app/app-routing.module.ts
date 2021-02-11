import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'camera', loadChildren: () => import('./modules/camera/camera.module').then(m => m.CameraModule)
  },
  { path: '', redirectTo: 'camera', pathMatch: 'full' },
  { path: '**', redirectTo: 'camera', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
