import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl:string='http://www.omdbapi.com?apikey=673e11b7';
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http:HttpClient) { }
  searchMovies(searchTerm:string):Observable<any>{
    return this.http.get(baseUrl,{params:{s:searchTerm}});
  }
  getMovieDetails(imdb:string):Observable<any>{
     return this.http.get(baseUrl,{params:{i:imdb}})
  }
}
