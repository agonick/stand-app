import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StandupService } from '../../services/standup-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  token: string = '';

  // Inject HttpClient to make HTTP requests
  constructor(private readonly standupService: StandupService) {
    // Initialize any necessary properties or services here
  }

  async doLogin(): Promise<void> {
    try{
      await this.standupService.doLogin(this.token);
      alert('Login Successful!');
    } catch (e) {
      alert('Login failed ' + e);
    }

  }

}
