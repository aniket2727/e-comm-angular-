import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Bootstrap the standalone app with routing
bootstrapApplication(AppComponent, {
  providers: [appConfig]
});
