import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {Results} from "./results.model";

@Injectable()
export class ResultsService {
  constructor(private httpClient: HttpClient) {}

  getResults(): Observable<Results[]> {
    return this.httpClient.get<Results[]>('http://habs.sdf.org:8082')
  }
}