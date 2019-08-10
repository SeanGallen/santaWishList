import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListMainPageComponent } from './wish-list-main-page.component';

describe('WishListMainPageComponent', () => {
  let component: WishListMainPageComponent;
  let fixture: ComponentFixture<WishListMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
