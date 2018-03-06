
import { Observable } from 'rxjs';
import { retryWhen } from 'rxjs/internal/patching/operator/retryWhen';

(Observable as any).prototype.retryWhen = retryWhen;

declare module 'rxjs/internal/Observable' {
  interface Observable<T> {
    retryWhen: typeof retryWhen;
  }
}
