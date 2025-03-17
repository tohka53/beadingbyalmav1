import { Component, OnInit, OnDestroy,HostListener } from '@angular/core';

interface ImageItem {
  thumbnail: string;    // URL para miniatura
  fullSize: string;     // URL para imagen completa
  alt: string;          // Texto alternativo
  title?: string;       // Título opcional
}
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


 // Arreglo de imágenes a mostrar
 images: ImageItem[] = [
  {
    thumbnail: 'assets/car1.jpeg',
    fullSize: 'assets/car1.jpeg',
    alt: ''
  },
  {
    thumbnail: 'assets/images/thumb2.jpg',
    fullSize: 'assets/images/img2.jpg',
    alt: '',
   
  },
  // Agrega más imágenes según sea necesario
];

// Control del modal
modalOpen: boolean = false;
currentImageIndex: number = 0;

constructor() { }



// Abrir modal con una imagen específica
openModal(index: number): void {
  this.currentImageIndex = index;
  this.modalOpen = true;
  // Prevenir scroll del body mientras el modal está abierto
  document.body.classList.add('overflow-hidden');
}

// Cerrar modal
closeModal(): void {
  this.modalOpen = false;
  document.body.classList.remove('overflow-hidden');
}

// Navegar a la imagen anterior
prevImage(event: Event): void {
  event.stopPropagation(); // Evita que se cierre el modal
  this.currentImageIndex = (this.currentImageIndex === 0) 
    ? this.images.length - 1 
    : this.currentImageIndex - 1;
}

// Navegar a la siguiente imagen
nextImage(event: Event): void {
  event.stopPropagation(); // Evita que se cierre el modal
  this.currentImageIndex = (this.currentImageIndex === this.images.length - 1) 
    ? 0 
    : this.currentImageIndex + 1;
}

// Responder a las teclas del teclado
@HostListener('document:keydown', ['$event'])
handleKeyboardEvent(event: KeyboardEvent): void {
  if (!this.modalOpen) return;
  
  switch(event.key) {
    case 'Escape':
      this.closeModal();
      break;
    case 'ArrowLeft':
      this.prevImage(new Event('keydown'));
      break;
    case 'ArrowRight':
      this.nextImage(new Event('keydown'));
      break;
  }
}







}