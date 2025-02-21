import { Component } from '@angular/core';

@Component({
  selector: 'app-fet',
  standalone: false,
  templateUrl: './fet.component.html',
  styleUrl: './fet.component.css'
})
export class FetComponent {

  currentYear: number = new Date().getFullYear();
  
  showModal = false;
  
  copyEmail() {
    navigator.clipboard.writeText('mecg1994@gmail.com')
      .then(() => {
        alert('Email copiado al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar el email:', err);
      });
  }
}