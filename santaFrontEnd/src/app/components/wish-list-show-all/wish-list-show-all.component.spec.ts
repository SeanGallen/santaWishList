import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListShowAllComponent } from './wish-list-show-all.component';

describe('WishListShowAllComponent', () => {
  let component: WishListShowAllComponent;
  let fixture: ComponentFixture<WishListShowAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListShowAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListShowAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
