import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Project} from '../models/project';
import {ProjectService} from '../services/project.service';

@Component({
    selector: 'typler-projects',
    template: `
        <h2>Categries</h2>
        <input #name />
        <input #description />
        <button (click)="saveProject(name.value, description.value)">Add</button>
        <div *ngFor="#project of projects;">
            <span class="title">{{project.title}}</span>
            <span class="description">{{project.description}}</span>
        </div>
    `,
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



    saveProject(title, description) {
        this.projectService.saveNewProject({title: title, description: description})
            .subscribe(data => {
                console.log(data);
                this.reloadProjects();
            }, error => {
                console.log(error);
            });


    }
}