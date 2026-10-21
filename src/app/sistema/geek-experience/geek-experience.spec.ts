import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeekExperience } from './geek-experience';

describe('GeekExperience', () => {
  let component: GeekExperience;
  let fixture: ComponentFixture<GeekExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeekExperience],
    }).compileComponents();

    fixture = TestBed.createComponent(GeekExperience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
