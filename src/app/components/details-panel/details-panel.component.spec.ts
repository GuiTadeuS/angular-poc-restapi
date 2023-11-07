import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPanelComponent } from './details-panel.component';

describe('DetailsPanelComponent', () => {
  let component: DetailsPanelComponent;
  let fixture: ComponentFixture<DetailsPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsPanelComponent]
    });
    fixture = TestBed.createComponent(DetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
