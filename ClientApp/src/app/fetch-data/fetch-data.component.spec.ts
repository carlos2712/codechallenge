import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FetchDataComponent } from './fetch-data.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


describe('FetchDataComponent', () => {
  let component: FetchDataComponent;
  let fixture: ComponentFixture<FetchDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientModule ],
      declarations: [ FetchDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchDataComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });


  it('Input search should be available', async(() => {
    const search = fixture.nativeElement.querySelector('#searchInput');
    expect(search).toBeTruthy();
  }));

  it('Select should be available', async(() => {
    const select = fixture.nativeElement.querySelector('#selecInput');
    expect(select).toBeTruthy();
  }));

  it('Loading should be present', async(() => {
    const loading = fixture.nativeElement.querySelector('.loading');
    expect(loading).toBeTruthy();
  }));


});
