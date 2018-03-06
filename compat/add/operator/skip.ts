
import { Observable } from 'rxjs';
import { skip } from 'rxjs/internal/patching/operator/skip';

(Observable as any).prototype.skip = skip;

declare module 'rxjs/internal/Observable' {
  interface Observable<T> {
    skip: typeof skip;
  }
}
