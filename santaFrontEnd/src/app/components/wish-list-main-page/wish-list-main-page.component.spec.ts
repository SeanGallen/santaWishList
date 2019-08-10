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

  it('should have Four Buttons', () => {
    const compiled = fixture.debugElement.nativeElement;
    let countOfButtons = compiled.querySelectorAll('button');
    expect(countOfButtons.length).toBe(4);
  });

  it('should have a write button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Write'); 
  });

  it('should have a update button', () => {
    const compiled = fixture.debugElement.nativeElement;
    let countOfButtons = compiled.querySelectorAll('button');
    expect(countOfButtons[1].textContent).toBe("Update");
  });

  it('should have a show all button', () => {
    const compiled = fixture.debugElement.nativeElement;
    let countOfButtons = compiled.querySelectorAll('button');
    expect(countOfButtons[2].textContent).toBe("Show All");
  });

  it('should have a delete button', () => {
    const compiled = fixture.debugElement.nativeElement;
    let countOfButtons = compiled.querySelectorAll('button');
    expect(countOfButtons[3].textContent).toBe("Delete");
  });

});
