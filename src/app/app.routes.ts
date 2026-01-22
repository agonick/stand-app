import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Meetings } from './components/meetings/meetings';
import { Team } from './components/team/team';
import { Login } from './components/login/login';
import { Meeting } from './components/meeting/meeting';
import { NewMeetings } from './components/new-meetings/new-meetings';

// questo router si occupa di definire le rotte principali dell'applicazione, il component router-outlet nell app.component si occuperà di caricare al suo posto il componente selezionato dalla rotta
export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // canActivate: [AuthGuard] inserisce una guardia di autenticazione per proteggere la rotta dashboard
    // children: Routes[] permette di definire delle sottorotte all'interno della rotta principale dashboard
    { path: 'dashboard', component: Dashboard, title: 'Dashboard', children: [] },
    { path: 'meetings', component: Meetings, title: 'Meetings' },
    { path: 'team', component: Team, title: 'Team' },
    { path: 'login', component: Login, title: 'Login' },
    { path: 'meeting', component: Meeting, title: 'Meeting' },
    { path: 'meeting/:id', component: Meeting, title: 'Meeting' },
    { path: 'new-meeting', component: NewMeetings, title: 'New Meeting' },
];
