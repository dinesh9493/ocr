import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'ocr-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  listOfSnapshots: any = [];
  activateTheCamera: boolean = false;
  showCameraError: boolean = false;
  private snapshotTrigger: any = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  get triggerObservable() {
    return this.snapshotTrigger.asObservable();
  }

  imageCaptured(e: any) {
    this.showCameraError = false;
    this.listOfSnapshots.push(e);
  }

  toggleCamera() {
    this.activateTheCamera = !this.activateTheCamera;
  }

  takesnapshot() {
    this.snapshotTrigger.next();
  }

  handleInitError(e: any) {
    this.showCameraError = true;
  }


}
