import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHandlingDemoComponent } from './event-handling-demo.component';

describe('EventHandlingDemoComponent', () => {
  let component: EventHandlingDemoComponent;
  let fixture: ComponentFixture<EventHandlingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventHandlingDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventHandlingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
