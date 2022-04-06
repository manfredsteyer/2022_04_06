import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{

  userName = '';

  login(userName: string, password: string): void {
    this.userName = userName;
    // Login for the hoest user TM
  }

  logout(): void {
    this.userName = '';
  }


}
