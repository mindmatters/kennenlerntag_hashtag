import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Hashtag } from './hashtag';

@Injectable({
  providedIn: 'root'
})
export class HashtagService {

  constructor(private httpClient: HttpClient) { }

  /**
   * name
   */
  public getHashtags(): Observable<Array<Hashtag>> {
    return this.httpClient.get<Array<Hashtag>>('http://localhost:3000/hashtags');
  }

  /**
   * addHashtag
   */
  public addHashtag(hashtagName: string) {
    let hashtag = new Hashtag();
    hashtag.name = hashtagName;

    this.httpClient.post('http://localhost:3000/hashtags', hashtag)
    .subscribe((data) => console.log('return: ', JSON.stringify(data)));
    
  }
}
