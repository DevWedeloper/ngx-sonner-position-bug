import { Component } from '@angular/core';
import { NgxSonnerToaster, toast } from 'ngx-sonner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxSonnerToaster],
  host: {
    class: 'flex justify-center items-centers min-h-screen',
  },
  template: `
    <ngx-sonner-toaster />
    <!-- <ngx-sonner-toaster position="top-center" /> -->
    <button (click)="onClick()">Give me a toast</button>
  `,
})
export class AppComponent {
  protected readonly toast = toast;
  protected onClick(): void {
    toast('My first toast', { position: 'top-center' });
  }
  // protected onClick(): void {
  //   toast('My first toast', { position: 'bottom-center' });
  // }
}
