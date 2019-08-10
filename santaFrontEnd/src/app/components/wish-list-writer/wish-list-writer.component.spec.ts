import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListWriterComponent } from './wish-list-writer.component';

describe('WishListWriterComponent', () => {
  let component: WishListWriterComponent;
  let fixture: ComponentFixture<WishListWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
