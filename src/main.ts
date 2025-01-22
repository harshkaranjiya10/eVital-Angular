import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HeaderComponents } from './app/header/header.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
bootstrapApplication(HeaderComponents)
