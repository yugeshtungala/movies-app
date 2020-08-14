import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/servics/movie-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies:any[]
  constructor(private movieService:MovieServiceService, 
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      qparams=>
        this.movieService.searchMovies(qparams['q']).subscribe(res => 
          this.movies=res.Search)
      
    )


    // this.movieService.searchMovies('iron').subscribe(req => this.movies = req.Search)
  }

}
