import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsraelLibraryComponent } from './israel-library.component';

describe('IsraelLibraryComponent', () => {
  let component: IsraelLibraryComponent;
  let fixture: ComponentFixture<IsraelLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsraelLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsraelLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
