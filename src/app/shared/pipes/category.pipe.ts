import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plataforma'
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    switch(value){
      case 'Nintendo': return 'videogame_asset';
      case 'PlayStation': return 'gamepad';
      case 'MultiPlataforma': return 'done_all';
      case 'Xbox': return 'sports_esports';
      case 'PC': return 'cumputer';
    }
    return 'videogame_asset_off';
  }
}
