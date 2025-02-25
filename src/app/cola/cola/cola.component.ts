import { Component } from '@angular/core';

@Component({
  selector: 'app-cola',
  standalone: false,
  templateUrl: './cola.component.html',
  styleUrl: './cola.component.css'
})
export class ColaComponent {
  agregarIdAleatorio(event: Event): void {
    // Generamos un ID aleatorio
    const randomId = this.generarIdAleatorio();
    
    // Asignamos el ID al campo oculto
    const randomIdInput = document.getElementById('randomId') as HTMLInputElement;
    if (randomIdInput) {
      randomIdInput.value = randomId;
    }
    
    // Agregamos el ID al asunto del correo
    const subjectInput = document.getElementById('subject') as HTMLInputElement;
    if (subjectInput) {
      const originalSubject = subjectInput.value;
      subjectInput.value = `${originalSubject} - ID: ${randomId}`;
    }
    
    // Opcional: Puedes mostrar el ID en la consola para verificar
    console.log('ID aleatorio generado:', randomId);
    console.log('Asunto actualizado:', subjectInput?.value);
  }
  
  private generarIdAleatorio(): string {
    // Genera un ID aleatorio de 10 caracteres
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const longitud = 10;
    let resultado = '';
    
    for (let i = 0; i < longitud; i++) {
      resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    // Añade un timestamp para mayor unicidad
    return resultado + '-' + new Date().getTime();
  }
}