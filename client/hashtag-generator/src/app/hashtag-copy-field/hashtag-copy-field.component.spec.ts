import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagCopyFieldComponent } from './hashtag-copy-field.component';

describe('HashtagCopyFieldComponent', () => {
  let component: HashtagCopyFieldComponent;
  let fixture: ComponentFixture<HashtagCopyFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashtagCopyFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagCopyFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
