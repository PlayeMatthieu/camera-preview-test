import {Component, inject} from '@angular/core';
import {IonApp, IonButton, IonRouterOutlet} from '@ionic/angular/standalone';
import {CameraService} from "./services/camera.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonButton, NgIf],
})
export class AppComponent {

  public cameraService = inject(CameraService);

  constructor() {}

  async stopCamera() {
    await this.cameraService.stopCamera();
  }

  async capture() {
    await this.cameraService.capture();
  }
}
