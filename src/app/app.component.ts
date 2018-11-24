import { Component } from '@angular/core';
//import { Movie, MovieService } from './services/movie.service';

export class Movie {
  constructor(
    public Title: string = "",
    public Genre: string = "",
    public Rating: string = ""
  ){}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movies Demo';
  genreList: string[] = ['Action','Adventure','Comedy','Crime & Gangster','Drama','Epics/Historical','Horror','Musicals/Dance','Science Fiction','War','Westerns'];
  movies: Movie[] = [];
  movieForm: Movie;

  constructor(
  //  movieService: MovieService
  ){
  this.movies.push(new Movie('StarWars: A New Hope','Science Fiction','4'));
  this.movies.push(new Movie('StarWars: The Empire Strikes Back','Science Fiction','5'));
  this.movies.push(new Movie('StarWars: Return of the Jedi','Science Fiction','3'));
  }

  ngOnInit() {
    this.onNew();
  }


  onNew() {
    // Initiate new movie registration.
    this.movieForm = new Movie();
  }

  //Cancel action
  onCancel() {
    // Initiate new movie registration.
    this.movieForm = new Movie();
  }

  // This method associate to Save Button.
  onSave() {
      // Push registration model object into movie registration list.
      this.movies.push(this.movieForm);
      // Create a fresh new form
      this.onNew();
  }


  remove(selectedRow:number) {
    // Delete the corresponding entry from the list.
    this.movies.splice(selectedRow, 1);
  }

  // Drop down menu
  onChangeGenre(genre: string) {
      this.movieForm.Genre = genre;
  }

  /**Update Ratings **/
  updateRating(rating:string, selectedRow:number){
    this.movies[selectedRow].Rating = rating;
  }
  /** Update Movie Title via input event*/
  updateTitle(movieModel:Movie, selectedRow:number){
    this.movies[selectedRow].Title = movieModel.Title;
  }
  /** Update Movie Genre */

  updateGenre(movieModel:Movie, selectedRow:number){
    this.movies[selectedRow].Genre = movieModel.Genre;
  }

}


