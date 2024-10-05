import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig = [
  provideRouter(routes),  // Provide the router configuration
  // You can add more providers here if needed
];
