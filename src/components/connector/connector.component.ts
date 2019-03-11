import { Component, Input } from '@angular/core';

@Component({})
export class Connector {
    @Input() url: string;
    @Input() session_id: number;
    @Input() channel: string;
    @Input() useSockJS: boolean;
    @Input() protocol: string;

    name: string;
    status: string = 'disconnected';
    send_message: string;
    received_message: string;

    constructor() {
    }

    connect() {}
    disconnect() {}
    send(channel: string, msg: string) {}
}