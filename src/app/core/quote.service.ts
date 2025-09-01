import { Injectable } from "@angular/core";

export interface Quote {
  text: string;
  author: string;
}

@Injectable({ providedIn: 'root' })
export class QuoteService {

  private quotes: Quote[] = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "You learn more from failure than from success. Don't let it stop you . Failure builds character.", author: "Unknown" },
    { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  ];

  getRandomQuote(): Quote {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return { ...this.quotes[randomIndex] };
  }

  getAllQuotes(): ReadonlyArray<Quote> {
    return this.quotes.map(q => ({ ...q }));
  }

  addQuote(quote: Quote): void {
    this.quotes.push({ ...quote });
  }

  removeQuote(quote: Quote): void {
    this.quotes = this.quotes.filter(
      q => q.text !== quote.text || q.author !== quote.author
    );
  }
}
