
import { Observable } from 'rxjs';
import { bufferTime } from 'rxjs/internal/patching/operator/bufferTime';

(Observable as any).prototype.bufferTime = bufferTime;

declare module 'rxjs/internal/Observable' {
  interface Observable<T> {
    bufferTime: typeof bufferTime;
  }
}
