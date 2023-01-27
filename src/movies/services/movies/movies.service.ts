import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Movie } from '../../utils/interface';
import * as NodeCache from 'node-cache';
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });



@Injectable()
export class MoviesService {
  shuffle(array: Movie[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  async generateMovies() {
    try {
      const { data } = await axios.get(
        'https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/',
      );

      const movies = this.shuffle(data).slice(0, 10);

      myCache.set('movies', JSON.stringify(movies), 10000);
    } catch (error) {
          }
  }

  async getMovies() {
    try {
      let movies: Movie[] = JSON.parse(myCache.get('movies'));
      if (movies == undefined) {
        // handle miss!
        const { data } = await axios.get(
          'https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/',
        );

         movies = this.shuffle(data).slice(0, 10);

      }
      
      return movies;
    } catch (error) {}
  }
}
