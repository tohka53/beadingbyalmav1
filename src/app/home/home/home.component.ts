import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  slides = [
    {
      image: 'assets/car1.jpeg',
      alt: 'Imagen 1'
    },
    {
      image: 'assets/car2.jpeg',
      alt: 'Imagen 2'
    },
    {
      image: 'assets/car3.jpeg',
      alt: 'Imagen 3'
    },
    {
      image: 'assets/car4.jpeg',
      alt: 'Imagen 4'
    },
    {
      image: 'assets/car5.jpeg',
      alt: 'Imagen 5'
    },
    {
      image: 'assets/car6.jpeg',
      alt: 'Imagen 6'
    }

  ];

  currentSlide = 0;
  autoPlayInterval: any;
  isTransitioning = false;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide() {
    if (!this.isTransitioning) {
      this.isTransitioning = true;
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      setTimeout(() => {
        this.isTransitioning = false;
      }, 500); // Duración de la transición
    }
  }

  prevSlide() {
    if (!this.isTransitioning) {
      this.isTransitioning = true;
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      setTimeout(() => {
        this.isTransitioning = false;
      }, 500); // Duración de la transición
    }
  }

  goToSlide(slideIndex: number) {
    if (!this.isTransitioning && slideIndex !== this.currentSlide) {
      this.isTransitioning = true;
      this.currentSlide = slideIndex;
      setTimeout(() => {
        this.isTransitioning = false;
      }, 500);
    }
  }

  getSlideStyle(index: number) {
    return {
      'transform': `translateX(${(index - this.currentSlide) * 100}%)`,
      'transition': 'transform 0.5s ease-in-out',
      'position': 'absolute',
      'width': '100%',
      'height': '100%'
    };
  }
}