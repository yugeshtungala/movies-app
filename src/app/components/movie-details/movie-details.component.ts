import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/servics/movie-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
movie:any
  constructor(private movieService:MovieServiceService, private activatedRoute:ActivatedRoute) { }
  goBack(){
    window.history.back(
      
    )
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.movieService.getMovieDetails(params['imdb']).subscribe(
        res => this.movie= res
      )
    )

  }

}
