import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProjectService {

    constructor(private http: Http) {
        // something...
    }

    getAll() : Observable<any> {
        return this.http.get('http://0.0.0.0:3000/api/Projects')
            .map(response => response.json());
    }


    saveNewProject(data: any) {
        const body = JSON.stringify(data);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('http://0.0.0.0:3000/api/Projects', body, {headers: headers})
            .map(response => response.json());
    }
}