import { Component, OnInit } from '@angular/core';
import { Review } from './review';
import { User } from './user';

@Component({
  selector: 'review-widget',
  templateUrl: './review-widget.component.html',
  styleUrls: ['./review-widget.component.css']
})

export class ReviewWidgetComponent implements OnInit {
  
  ngOnInit(): void {
    this.createNewReview();
  }

  title = 'customer-reviews';

  selectedReview: number = 0;
  existingReviews: Review[];

  review: Review = new Review();

  constructor() {
    this.existingReviews = [
      {
        Stars: 5,
        User: {
          "Name": "Tron"
        },
        Text: "This app is mutha fuck'n amaz'n!",
        Date: new Date("1/1/2017")
      },
      {
        Stars: 5,
        User: {
          "Name": "Dr. Manhattan"
        },
        Text: "I want to make love to this app!",
        Date: new Date("3/23/2016")
      }
    ];
  }

  setReview(rating: any) {
    this.review.Stars = rating;
  }

  submitReview() {
    this.existingReviews.push(this.review);
    this.createNewReview();
  }

  createNewReview() {
    this.review = new Review();
    this.review.User = new User();
    this.review.User.Name = "Me";
    this.review.Date = new Date();
  }

  createStarArray(stars: number) {
    return Array(stars);
  }
}





