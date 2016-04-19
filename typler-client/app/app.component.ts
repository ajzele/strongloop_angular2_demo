import {Component} from 'angular2/core';
import {ProjectsComponent} from './components/projects.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>typler</h1>
        <typler-projects></typler-projects>
    `,
    directives: [ProjectsComponent]
})
export class AppComponent { }