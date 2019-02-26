import { Component }

@Component
import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: '<app-server></app-server><app-server></app-server>',
	styleUrl: ['./app.component.css'],
	styles: [`
		h3 {
			color: red;
		}
	`]
})
export class ServerComponent {
	serverId: number = 10;
	serverStatus: string = 'offline';

	getServerStatus() {
		return this.serverStatus;
	}
}