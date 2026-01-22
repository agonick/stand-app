import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMeetings } from './new-meetings';

describe('NewMeetings', () => {
  let component: NewMeetings;
  let fixture: ComponentFixture<NewMeetings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewMeetings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMeetings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
