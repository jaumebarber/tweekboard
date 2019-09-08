import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardnavComponent } from './boardnav.component';

describe('BoardnavComponent', () => {
  let component: BoardnavComponent;
  let fixture: ComponentFixture<BoardnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
