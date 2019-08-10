import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListMainPageComponent } from './wish-list-main-page.component';

describe('WishListMainPageComponent', () => {
  let component: WishListMainPageComponent;
  let fixture: ComponentFixture<WishListMainPageComponent>;
  let countOfButtons: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishListMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListMainPageComponent);
    component = fixture.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    countOfButtons = compiled.querySelectorAll('button');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have four Buttons', () => {
    expect(countOfButtons.length).toBe(4);
  });

  it('should have a write button', () => {
    expect(countOfButtons[0].textContent).toBe("Write");
  });

  it('should have a update button', () => {
    expect(countOfButtons[1].textContent).toBe("Update");
  });

  it('should have a show all button', () => {
    expect(countOfButtons[2].textContent).toBe("Show All");
  });

  it('should have a delete button', () => {
    expect(countOfButtons[3].textContent).toBe("Delete");
  });

});
