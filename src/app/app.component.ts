import { Component, ViewChildren, QueryList, Input } from '@angular/core';
import { Connector } from '../components/connector/connector.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() connector_type: string;
  @Input() url: string;
  @Input() channel: string;
  @Input() connector_count: number = 0;
  @Input() connector_options: any[] = [];

  @ViewChildren('connector')
  connectors: QueryList<Connector>;

  constructor() { }

  createAll() {
    this.connector_options = [];
    for (var i = 0; i < this.connector_count; i++) {
      var option = {
        url: this.url,
        session_id: i,
        channel: this.channel
      };
      
      this.connector_options.push(option);
    }
  }

  connectAll() {
    if (this.connectors) {
      this.connectors.forEach((connector, index, array) => {
        connector.connect();
        console.log("Session: " + connector.session_id + " " + connector.status);
      });
    }
  }

  disconnectAll() {
    if (this.connectors) {
      this.connectors.forEach((connector, index, array) => {
        connector.disconnect();
        console.log("Session: " + connector.session_id + " " + connector.status);
      });
    }
  }

  onConnectionTypeChanged() {
    console.log(this.connector_type);
  }
}
