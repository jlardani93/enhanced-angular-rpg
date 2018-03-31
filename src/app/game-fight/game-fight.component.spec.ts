import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFightComponent } from './game-fight.component';

describe('GameFightComponent', () => {
  let component: GameFightComponent;
  let fixture: ComponentFixture<GameFightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameFightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
