import { Component, OnInit } from '@angular/core';
import { Hashtag } from '../hashtag';
import { HashtagService } from '../hashtag.service';

@Component({
  selector: 'app-hashtag-copy-field',
  templateUrl: './hashtag-copy-field.component.html',
  styleUrls: ['./hashtag-copy-field.component.css']
})
export class HashtagCopyFieldComponent implements OnInit {
  public hashtags: Array<Hashtag> = [];

  constructor(private hashtagService: HashtagService) { }

  ngOnInit(): void {
    this.hashtagService.getHashtags().subscribe((hashtags) => this.hashtags = hashtags);
  }

  /**
   * getHashtagString
   */
  public printHashtagString(): string {
    return this.hashtags.map((hashtag) => '#' + hashtag).join(' ');
  }
}
