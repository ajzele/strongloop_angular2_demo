import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Project} from '../models/project';
import {ProjectService} from '../services/project.service';
import {ProjectComponent} from './project.component';

@Component({
    selector: 'typler-projects',
    template: `
        <h2>Categries</h2>
        <div *ngFor="#project of projects;">
            <span class="title">{{project.title}}</span>
            <span class="description">{{project.description}}</span>
        </div>

        <h2>Add new</h2>
        <typler-project (saveProjectEvent)="observerFor_saveProjectEvent($event)"></typler-project>

    `,
    directives: [ProjectComponent],
    providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

    private projects: Array<Project>[];

    constructor(public projectService:ProjectService) {

    }

    ngOnInit() {
        this.reloadProjects();
    }

    reloadProjects() {
        this.projectService.getAll()
            .subscribe(data => {
                console.log(data);
                this.projects = data;
            }, error => {
                console.log(error);
            });
    }

    observerFor_saveProjectEvent(event)
    {
        console.log('start observerFor_saveProjectEvent');
        console.log(event);
        console.log('end observerFor_saveProjectEvent');
    }

    // add event that triggers reloadProjects when child component typler-project creates new project
}