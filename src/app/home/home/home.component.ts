import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

interface ImageItem {
  thumbnail: string;    // URL para miniatura
  fullSize: string;     // URL para imagen completa
  alt: string;          // Texto alternativo
  title?: string;       // Título opcional
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: '../home/home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  slides = [
    {
      image: 'assets/w1.jpeg',
      alt: 'Imagen 1'
    },
    {
      image: 'assets/w2.jpeg',
      alt: 'Imagen 2'
    },
    {
      image: 'assets/w3.jpeg',
      alt: 'Imagen 3'
    },
    {
      image: 'assets/w4.jpeg',
      alt: 'Imagen 4'
    },
   
  ];

  currentSlide = 0;
  autoPlayInterval: any;
  isTransitioning = false;

  // Arreglo de imágenes a mostrar en la galería
  images: ImageItem[] = [
    {
      thumbnail: '/assets/home3.png',
      fullSize: '/assets/home3.png',
      alt: ''
    },
    {
      thumbnail: '/assets/home7.png',
      fullSize: '/assets/home7.png',
      alt: '',
    },
    {
      thumbnail: '/assets/home8.jpeg',
      fullSize: '/assets/home8.jpeg',
      alt: ''
    },
    {
      thumbnail: '/assets/home9.jpeg',
      fullSize: '/assets/home9.jpeg',
      alt: ''
    },
    {
      thumbnail: '/assets/home2.png',
      fullSize: '/assets/home2.png',
      alt: ''
    },
    {
      thumbnail: '/assets/home10.jpeg',
      fullSize: '/assets/home10.jpeg',
      alt: ''
    }
  ];

  // Todas las imágenes disponibles para el modal (carrusel + galería)
  allImages: ImageItem[] = [];

  // Control del modal
  modalOpen: boolean = false;
  currentImageIndex: number = 0;

  constructor() { }

  ngOnInit() {
    this.startAutoPlay();
    this.currentImageIndex = 0;
    // Combinar las imágenes del carrusel con las de la galería para el modal
    this.allImages = [
      ...this.slides.map(slide => ({
        thumbnail: slide.image,
        fullSize: slide.image,
        alt: slide.alt
      })),
      ...this.images
    ];
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

  // Método para abrir el modal desde el carrusel
  openCarouselImageModal(index: number): void {
    this.currentImageIndex = index;
    this.modalOpen = true;
    this.stopAutoPlay(); // Detener autoplay mientras el modal está abierto
    document.body.classList.add('overflow-hidden');
  }

  // Abrir modal con una imagen específica de la galería
  openModal(index: number): void {
    // Ajustar el índice considerando que ahora tenemos las imágenes del carrusel primero
    this.currentImageIndex = this.slides.length + index;
    this.currentImageIndex = index; // Asegúrate de que este sea el índice correcto

    this.modalOpen = true;
    this.stopAutoPlay(); // Detener autoplay mientras el modal está abierto
    document.body.classList.add('overflow-hidden');
  }

  // Cerrar modal
  closeModal(): void {
    this.modalOpen = false;
    document.body.classList.remove('overflow-hidden');
    this.startAutoPlay(); // Reanudar autoplay cuando se cierra el modal
  }

  // Navegar a la imagen anterior
  prevImage(event: Event): void {
    event.stopPropagation(); // Evita que se cierre el modal
    this.currentImageIndex = (this.currentImageIndex === 0) 
      ? this.allImages.length - 1 
      : this.currentImageIndex - 1;
  }

  // Navegar a la siguiente imagen
  nextImage(event: Event): void {
    event.stopPropagation(); // Evita que se cierre el modal
    this.currentImageIndex = (this.currentImageIndex === this.allImages.length - 1) 
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


  isValidImageIndex(index: number): boolean {
    return this.images && this.images.length > 0 && index >= 0 && index < this.images.length;
  }
}