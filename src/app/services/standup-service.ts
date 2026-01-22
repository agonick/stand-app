import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StandupService {

  private readonly baseUrl: string = 'https://standupparo-apis.vercel.app/api';

  constructor(private readonly httpClient: HttpClient) {

  }

  async doLogin(token: string): Promise<void> {
    const response$ = this.httpClient.get(`${this.baseUrl}/company-name`, { headers: { 'x-api-key': token } });
    const responseData = await firstValueFrom(response$);
    console.log(responseData);
    localStorage.setItem('apiToken', token);
  }

}
