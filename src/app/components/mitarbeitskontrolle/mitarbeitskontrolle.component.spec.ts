import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitarbeitskontrolleComponent } from './mitarbeitskontrolle.component';

describe('MitarbeitskontrolleComponent', () => {
  let component: MitarbeitskontrolleComponent;
  let fixture: ComponentFixture<MitarbeitskontrolleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitarbeitskontrolleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitarbeitskontrolleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
