import { Observable, Observer } from 'rxjs';

export class UserAsyncService {
  user = { name: 'Arun' };
  getUserDetails() {
    // Create an observables.
    const userObservables = Observable.create(
      (observer: Observer<{ name: string }>) => {
        setTimeout(() => {
          observer.next(this.user);
        }, 2000);
      }
    );
    return userObservables;
  }
}
