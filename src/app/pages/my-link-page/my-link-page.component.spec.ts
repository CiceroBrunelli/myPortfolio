import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLinkPageComponent } from './my-link-page.component';

describe('MyLinkPageComponent', () => {
  let component: MyLinkPageComponent;
  let fixture: ComponentFixture<MyLinkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLinkPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLinkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
