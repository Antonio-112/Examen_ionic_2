import { QuoteService } from './quote.service';

describe('QuoteService', () => {
  let service: QuoteService;

  beforeEach(() => {
    service = new QuoteService();
  });

  it('should return all quotes without exposing internal array', () => {
    const quotes = service.getAllQuotes();
    expect(quotes.length).toBeGreaterThan(0);
    expect(quotes).not.toBe((service as any).quotes);
  });

  it('should add and remove quotes', () => {
    const quote = { text: 'Test', author: 'Tester' };
    service.addQuote(quote);
    expect(service.getAllQuotes().some(q => q.text === 'Test')).toBe(true);
    service.removeQuote(quote);
    expect(service.getAllQuotes().some(q => q.text === 'Test')).toBe(false);
  });
});
