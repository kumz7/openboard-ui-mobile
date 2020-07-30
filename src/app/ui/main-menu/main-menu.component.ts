import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

declare var Android: any;

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

    battery:string = "";
    wifi:string = "Wifi Network";
    signal:string = "Mobile Network";
    messages:string = "Text Messages";
    dashboard:string = "Performance Dashboard";
    voice:string = "Voice Assistant";
    capture:string = "Screen Recording";
    mirror:string = "Screen Sharing";
    settings:string = "App Settings";
    public modalRef: BsModalRef; // {1}
    constructor(private modalService: BsModalService) {
      window['service'] = this;
    }

    public batteryStatus(){
      this.battery = Android.showBattery();
    }

}
