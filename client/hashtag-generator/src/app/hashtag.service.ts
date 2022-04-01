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
}
