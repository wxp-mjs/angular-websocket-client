import { Component } from '@angular/core';
import { Connector } from '../connector.component';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Component({
    selector: 'stomp-connector',
    templateUrl: '../connector.component.html',
    styleUrls: ['../connector.component.scss']
})
export class StompConnector extends Connector {
    stomp: any;

    constructor() {
        super();
        this.name = "Stomp";
    }

    connect() {
        this.received_message = 'connect';
        // var ws = null;
        // if (this.useSockJS) {
        //     ws = new SockJS(this.url, null, {
        //         sessionId: Number(this.session_id)
        //     });
        // } else {
        //     ws = new WebSocket(this.url);
        // }

        // const self = this;

        // this.stomp = Stomp.over(ws);
        // if (this.useSockJS) {
        //     this.stomp.heartbeat.incoming = 10000;
        //     this.stomp.heartbeat.outgoing = 10000;
        // }

        // this.stomp.connect({}, 
        //     (frame) => { // connected event
        //         self.status = 'connected';

        //         if (self.channel) {
        //             self.stomp.subscribe(self.channel, 
        //                 function (frame) {
        //                     self.received_message = JSON.stringify(frame.body);
        //                 },
        //                 {});
        //         } 
        //         self.stomp.subscribe('')
        //     }, 
        //     (err) => { // error event
        //         self.status = 'disconnected';
        //         self.received_message = JSON.stringify(err);
        //     },
        //     (event) => { // close event
        //         self.status = 'disconnected';
        //     });
    }

    disconnect() {
        this.received_message = 'disconnect';
        // if (this.stomp) {
        //     this.stomp.disconnect();
        // }
        // this.status = 'disconnected';
    }

    send(channel: string, msg: string) {
        this.received_message = 'send';
        // if (this.stomp) {
        //     this.stomp.send(channel, {}, msg);
        // }
    }
}