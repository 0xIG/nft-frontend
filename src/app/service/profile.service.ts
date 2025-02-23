import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    wallet = '';
    chainId = 0;

    public setProfileData(wallet: string, chainId: number): void {
        this.wallet = wallet;
        this.chainId = chainId;
    }
}
