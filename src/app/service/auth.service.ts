import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private accounts: any;
    constructor(private http: HttpClient) {}

    public async singIn(): Promise<void> {
        

        let nonce = await firstValueFrom(
            this.http.post(environment.apiUrl + '/request-message', {
                wallet: this.accounts[0],
            })
        );
    }
}
