import {Component, inject} from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonButton} from '@ionic/angular/standalone';
import {CameraService} from "../services/camera.service";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class Tab1Page {
  constructor() {}

  public cameraService = inject(CameraService);
  public images = this.cameraService.images;

  async startCamera() {
    await this.cameraService.startCamera();
  }
}
