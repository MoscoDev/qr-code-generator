import { Controller,Get } from '@nestjs/common';
import { MoviesService } from '../services/movies/movies.service';

@Controller('/api/v1/movies')
export class MoviesController {
    constructor(private readonly movieServices: MoviesService){}

  @Get('/')
  async getMovies() {
    return this.movieServices.getMovies();
  }
}
