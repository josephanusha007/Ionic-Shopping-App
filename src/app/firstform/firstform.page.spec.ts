import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstformPage } from './firstform.page';

describe('FirstformPage', () => {
  let component: FirstformPage;
  let fixture: ComponentFixture<FirstformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
