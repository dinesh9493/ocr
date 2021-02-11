import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebcamModule } from 'ngx-webcam';

import { CameraRoutingModule } from './camera-routing.module';
import { CameraComponent } from './components/camera/camera.component';

@NgModule({
  declarations: [CameraComponent],
  imports: [CommonModule, CameraRoutingModule, WebcamModule],
})
export class CameraModule {}
