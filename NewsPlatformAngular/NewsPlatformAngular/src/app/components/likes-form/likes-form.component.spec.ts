import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesFormComponent } from './likes-form.component';

describe('LikesFormComponent', () => {
  let component: LikesFormComponent;
  let fixture: ComponentFixture<LikesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
