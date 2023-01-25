import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../models/Persona';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  

  transform(value: Array<any>, arg: any): any {
    const resultPosts = [];
    for (const post of value) {
      if (post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      } 
      else if (post.apellido.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      }       
      else if (post.username.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      }
      else if (post.email.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };            
    };
    return resultPosts;
  }
}