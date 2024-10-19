import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ShelfModule } from './app/shelf/shelf.module';

platformBrowserDynamic().bootstrapModule(ShelfModule)
  .catch((err) => console.error(err));
