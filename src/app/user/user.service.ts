import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  user = {
    name: 'Arun'
  };

  getUser() {
    return this.user;
  }
}
