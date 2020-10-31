import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .onLine {
        color: white;
      }
    `
  ]
})
export class ServerComponent {
  serverId = 10;
  serevrStatus = 'offline';

  constructor() {
    this.serevrStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerStatus(): string {
    return this.serevrStatus;
  }
  getColor(): string {
    return this.serevrStatus === 'online' ? 'green' : ' red';
  }
}
