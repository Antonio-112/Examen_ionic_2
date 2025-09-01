import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { QuotesPage } from './quotes.page';
import { QuoteService } from 'src/app/core/quote.service';

describe('QuotesPage', () => {
  let component: QuotesPage;
  let fixture: ComponentFixture<QuotesPage>;
  let service: QuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [QuotesPage], providers: [provideRouter([])] });
    fixture = TestBed.createComponent(QuotesPage);
    component = fixture.componentInstance;
    service = TestBed.inject(QuoteService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a quote', () => {
    const initialLength = service.getAllQuotes().length;
    component.newQuoteText = 'test quote';
    component.newQuoteAuthor = 'tester';
    component.addQuote();
    expect(service.getAllQuotes().length).toBe(initialLength + 1);
  });
});
