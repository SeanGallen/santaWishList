import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListUpdatesComponent } from './wish-list-updates.component';

describe('WishListUpdatesComponent', () => {
  let component: WishListUpdatesComponent;
  let fixture: ComponentFixture<WishListUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
