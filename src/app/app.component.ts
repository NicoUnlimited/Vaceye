import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
 routeLinks: any[];
 activeLinkIndex = -1;
 galleryOptions: NgxGalleryOptions[];
 galleryImages: NgxGalleryImage[];

 constructor(private router: Router) {
   this.routeLinks = [
     {
       label: 'Home',
       link: './Home',
       index: 0
     },

     {
       label: 'Vac Eye',
       link: './Vac',
       index: 0
     },

     {
       label : 'Blog',
       link: './Blog',
       index: 0
     }
   ];
 }

 ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
  });

  this.galleryOptions = [
    {
      width: '800px',
      height: '400px',
      thumbnails: false,
      imageAnimation: NgxGalleryAnimation.Slide,
      imageArrowsAutoHide: true
    },
    {
      breakpoint: 800,
      width: '100%',
      height: '600px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20
  },
  // max-width 400
  {
      breakpoint: 400,
      preview: false
  }
    
  ];

  this.galleryImages = [
    {
      small:  '/assets/image1.jpg',
      medium: '/assets/image1.jpg',
      big:    '/assets/image1.jpg'
  }
  ];
}
}
