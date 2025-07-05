import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashGenerator } from './hash-generator';

describe('HashGenerator', () => {
  let component: HashGenerator;
  let fixture: ComponentFixture<HashGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HashGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HashGenerator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
