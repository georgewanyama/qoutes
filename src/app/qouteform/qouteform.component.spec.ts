import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QouteformComponent } from './qouteform.component';

describe('QouteformComponent', () => {
  let component: QouteformComponent;
  let fixture: ComponentFixture<QouteformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QouteformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QouteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
