
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/internal/patching/operator/takeWhile';

(Observable as any).prototype.takeWhile = takeWhile;

declare module 'rxjs/internal/Observable' {
  interface Observable<T> {
    takeWhile: typeof takeWhile;
  }
}
