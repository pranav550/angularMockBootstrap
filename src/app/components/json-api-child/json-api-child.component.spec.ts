import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonApiChildComponent } from './json-api-child.component';

describe('JsonApiChildComponent', () => {
  let component: JsonApiChildComponent;
  let fixture: ComponentFixture<JsonApiChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonApiChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonApiChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
