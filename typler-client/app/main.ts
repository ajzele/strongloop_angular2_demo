import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent, [ROUTER_DIRECTIVES, HTTP_PROVIDERS]);