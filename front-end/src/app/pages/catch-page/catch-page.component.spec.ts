import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchPageComponent } from './catch-page.component';

describe('CatchPageComponent', () => {
  let component: CatchPageComponent;
  let fixture: ComponentFixture<CatchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatchPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
