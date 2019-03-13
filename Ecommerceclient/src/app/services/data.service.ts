import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class DataService<T> {
    private token: string;
    protected headers: HttpHeaders;
    protected url: string;

    constructor(protected http: HttpClient) {
    }

    getHeaders(): HttpHeaders {

        // if (!this.headers) {

            // Récupération du token.
            // if (!this.token) {
                this.token = localStorage.getItem('jwt');
                // console.log('Initialisation du service. Token envoyé au serveur: ' + this.token);
            // }

            // Construction de l'en-tête avec token, commune à tous les appels au serveur.
            // 'Authorization': 'Bearer ' + this.token,
            this.headers = new HttpHeaders({
                
                'Content-Type': 'application/json'
            });
        // }

        return this.headers;
    }
    
    // Get & Set Url
    get baseUrl(): string 
    {
        return localStorage.getItem('baseUrl');
    }
    set baseUrl(baseUrl: string)
    {
        if (!baseUrl.endsWith('/')) baseUrl = baseUrl + '/';
        localStorage.setItem('baseUrl', baseUrl);
    }



    public getAll(): Observable<T[]> {
        console.log('URL d appel: ' + this.url);
        return this.http.get<T[]>(this.url, { responseType: 'json', headers: this.getHeaders() } )
        .pipe(catchError(error => this.handleError(error)));
    }

    public getAllModels<TModel>(url: string) {
        return this.http.get<TModel[]>(url, {responseType: 'json'}).pipe(catchError(error => this.handleError(error)));
    }

    public getById(id: number): Observable<T> {
        console.log('URL d\'appel: ' + this.url + '/' + id);
        return this.http.get<T>(this.url + '/' + id, {responseType: 'json', headers: this.getHeaders() } )
        .pipe(catchError(error => this.handleError(error)));
    }

    public create(entity: T): Observable<T> {
        console.log('Création de l\'entité: ' + JSON.stringify(entity));
        console.log('URL utilisé pour la création: ' + this.url);
        return this.http.post<T>(this.url, entity, { responseType: 'json', headers: this.getHeaders() })
        .pipe(catchError(error => this.handleError(error)));
    }

    // Supprime une entité.
    public delete(id) {
        console.log('Suppression de l\'entité avec l\'id: ' + id);
        return this.http.delete(this.url + '/' + id, { responseType: 'json', headers: this.getHeaders() } )
        .pipe(catchError(error => this.handleError(error)));
    }

    public update(entity): Observable<Object> {
        const data = JSON.stringify(entity);
        console.log('Données à envoyer pour la mise à jour: ' + data);
        console.log('url d\'appel: ' + this.url);
        const url = this.url + '/' + entity.id;
        return this.http.put(url, data, { responseType: 'json', headers: this.getHeaders() })
        .pipe(catchError(error => this.handleError(error)));
    }

    public patch(id: number, field: string, value: string) {
        console.log('Mise à jour du champ \'' + field + '\' avec la valeur \'' + value + '\' pour l\'objet d\'id \'' + id);

        // Construction de l'URL.
        const url = this.url + '/' + id;
        console.log('URL de mise a jour:' + url);

        // Construction du body de la requête patch
        const body = JSON.stringify([{ 'op': 'replace', 'path': '/' + field, 'value': value}]);
        console.log('Données à envoyer au serveur pour le patch: ' + body);

        return this.http
            .patch<T>(url, body, { responseType: 'json', headers: this.getHeaders() })
            .pipe(catchError(error => this.handleError(error)));
    }

    public handleError(error: HttpErrorResponse) {

        console.log ('Handle error n°: ' + error.status);
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            'Backend returned: ' + error.message +
            '\nWith headers: ' + JSON.stringify(error.headers));
        }

        return throwError(error);
    }
}
