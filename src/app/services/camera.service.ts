import {Injectable, signal} from '@angular/core';
import {CameraPreview, CameraPreviewOptions} from "@capacitor-community/camera-preview";

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  public cameraActive = signal(false);
  public images: string[] = []


  constructor() { }

  public setCameraActive(active: boolean) {
    this.cameraActive.set(active);
  }

  public async startCamera() {
    // @ts-ignore
    document.querySelector('body').classList.add('camera-active');
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      parent: 'ion-content',
      className: 'cameraPreview',
      toBack: true,
    };
    this.setCameraActive(true);
    await CameraPreview.start(cameraPreviewOptions);
  }

  public async stopCamera() {
    // @ts-ignore
    document.querySelector('body').classList.remove('camera-active');
    await CameraPreview.stop();
    this.setCameraActive(false);
  }

  public async capture() {
    const result = await CameraPreview.capture({ quality: 90 });
    this.images.push(result.value);
    console.log(result.value);
  }


}
