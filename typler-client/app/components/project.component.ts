import {Component} from 'angular2/core';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Project} from '../models/project';
import {ProjectService} from '../services/project.service';
import {FORM_DIRECTIVES} from 'angular2/common'

@Component({
    selector: 'typler-project',
    template: `
        <h2>Categries</h2>
        <input [(ngModel)]="project.title" />
        <input [(ngModel)]="project.description" />
        <button (click)="saveProject()">Add</button>
    `,
    directives: [FORM_DIRECTIVES]
    //outputs: ['saveProjectEvent']
})
export class ProjectComponent {

    private project:Project;

    @Output() saveProjectEvent: EventEmitter<any> = new EventEmitter();

    constructor(private projectService:ProjectService) {
        // Init the new product
        this.project = new Project();
    }

    saveProject() {
        this.projectService.saveNewProject(this.project)
            .subscribe(data => {
                console.log(data);
                this.saveProjectEvent.emit(this.project);
            }, error => {
                console.log(error);
            });
    }
}