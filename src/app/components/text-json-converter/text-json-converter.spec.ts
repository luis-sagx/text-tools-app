import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextJsonConverter } from './text-json-converter';

describe('TextJsonConverter', () => {
  let component: TextJsonConverter;
  let fixture: ComponentFixture<TextJsonConverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextJsonConverter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextJsonConverter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
