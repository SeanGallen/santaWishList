import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListRemovalComponent } from './wish-list-removal.component';

describe('WishListRemovalComponent', () => {
  let component: WishListRemovalComponent;
  let fixture: ComponentFixture<WishListRemovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListRemovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
