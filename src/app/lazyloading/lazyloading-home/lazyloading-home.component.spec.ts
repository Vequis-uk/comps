import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadingHomeComponent } from './lazyloading-home.component';

describe('LazyloadingHomeComponent', () => {
  let component: LazyloadingHomeComponent;
  let fixture: ComponentFixture<LazyloadingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyloadingHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyloadingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
