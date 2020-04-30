import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReviewfirstformPage } from './reviewfirstform.page';

describe('ReviewfirstformPage', () => {
  let component: ReviewfirstformPage;
  let fixture: ComponentFixture<ReviewfirstformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewfirstformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewfirstformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
