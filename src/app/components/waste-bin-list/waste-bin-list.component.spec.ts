import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteBinListComponent } from './waste-bin-list.component';

describe('WasteBinListComponent', () => {
  let component: WasteBinListComponent;
  let fixture: ComponentFixture<WasteBinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WasteBinListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasteBinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
