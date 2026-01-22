import { TestBed } from '@angular/core/testing';
import { provideRouter, Route } from '@angular/router';
import { App } from './app';

describe('App', () => {

  const routes: Route[] = [];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
