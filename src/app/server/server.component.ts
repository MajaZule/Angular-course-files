import { Component }

@Component
import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
//	templateUrl: '<app-server></app-server><app-server></app-server>',
	templateUrl¸: './server.component.html',
	styleUrl: ['./app.component.css'],
	styles: [`
		h3 {
			color: red;
		}
	`]
})
//export class ServerComponent {
//	serverId: number = 10;
//	serverStatus: string = 'offline';

//	getServerStatus() {
//		return this.serverStatus;
//	}
//}

export class ServerComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = 'No server was created!';
	serverName = "Testserver";

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000);
	}

	ngOnInit() {
	}

	onCreateServer() {
		this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
	}

	onUpdateServerName(event: any) {
		console.log(event) = (<HTMLInputElement>event.target).value;
	}
}