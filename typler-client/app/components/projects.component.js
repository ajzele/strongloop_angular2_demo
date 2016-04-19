System.register(['angular2/core', '../services/project.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, project_service_1;
    var ProjectsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            }],
        execute: function() {
            ProjectsComponent = (function () {
                function ProjectsComponent(projectService) {
                    this.projectService = projectService;
                }
                ProjectsComponent.prototype.ngOnInit = function () {
                    this.reloadProjects();
                };
                ProjectsComponent.prototype.reloadProjects = function () {
                    var _this = this;
                    this.projectService.getAll()
                        .subscribe(function (data) {
                        console.log(data);
                        _this.projects = data;
                    }, function (error) {
                        console.log(error);
                    });
                };
                ProjectsComponent.prototype.saveProject = function (title, description) {
                    var _this = this;
                    this.projectService.saveNewProject({ title: title, description: description })
                        .subscribe(function (data) {
                        console.log(data);
                        _this.reloadProjects();
                    }, function (error) {
                        console.log(error);
                    });
                };
                ProjectsComponent = __decorate([
                    core_1.Component({
                        selector: 'typler-projects',
                        template: "\n        <h2>Categries</h2>\n        <input #name />\n        <input #description />\n        <button (click)=\"saveProject(name.value, description.value)\">Add</button>\n        <div *ngFor=\"#project of projects;\">\n            <span class=\"title\">{{project.title}}</span>\n            <span class=\"description\">{{project.description}}</span>\n        </div>\n    ",
                        providers: [project_service_1.ProjectService]
                    }), 
                    __metadata('design:paramtypes', [project_service_1.ProjectService])
                ], ProjectsComponent);
                return ProjectsComponent;
            }());
            exports_1("ProjectsComponent", ProjectsComponent);
        }
    }
});
//# sourceMappingURL=projects.component.js.map