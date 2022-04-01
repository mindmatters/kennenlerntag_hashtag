import { Component, OnInit } from '@angular/core';
import { HashtagService } from '../hashtag.service';

@Component({
  selector: 'app-hashtag-input',
  templateUrl: './hashtag-input.component.html',
  styleUrls: ['./hashtag-input.component.css']
})
export class HashtagInputComponent implements OnInit {
  public newHashtag: string = '';

  constructor(private hashtagService: HashtagService) { }

  ngOnInit(): void {
  }

  public addHashtag(): void {
    console.log('new Hasttag: ', this.newHashtag)
    this.hashtagService.addHashtag(this.newHashtag);
  }
}
