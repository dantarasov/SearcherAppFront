import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable } from 'rxjs';
import { Searcher } from './searcher';

@Injectable({
    providedIn: 'root'
})

export class SearcherService {
    private apiServerUrl = '';
    
    constructor(private http: HttpClient) {}

    public getSearchers(): Observable<Searcher[]> {
        return this.http.get<Searcher[]>(`${this.apiServerUrl}/searcher/all`);
    }
    
    public addSearcher(searcher: Searcher): Observable<Searcher> {
        return this.http.post<Searcher>(`${this.apiServerUrl}/searcher/add`, searcher);
    }
    
    public updateSearcher(searcher: Searcher): Observable<Searcher> {
        return this.http.put<Searcher>(`${this.apiServerUrl}/searcher/update`, searcher);    
    }
    public deleteSearcher(searcherId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/searcher/delete/${searcherId}`);    
    }
}