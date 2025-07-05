import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversePalindromeTool } from './reverse-palindrome-tool';

describe('ReversePalindromeTool', () => {
  let component: ReversePalindromeTool;
  let fixture: ComponentFixture<ReversePalindromeTool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReversePalindromeTool]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReversePalindromeTool);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
