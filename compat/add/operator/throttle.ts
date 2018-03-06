
import { Observable } from 'rxjs';
import { throttle } from 'rxjs/internal/patching/operator/throttle';

(Observable as any).prototype.throttle = throttle;

declare module 'rxjs/internal/Observable' {
  interface Observable<T> {
    throttle: typeof throttle;
  }
}
