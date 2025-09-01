import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class QuoteService {
    
  constructor() { }

    private quotes = [
    { text: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney" },
    { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
        author: "Winston Churchill" },
    { text: "Don't let yesterday take up too much of today.",
        author: "Will Rogers" },
    { text: "You learn more from failure than from success. Don't let it stop you . Failure builds character.",
        author: "Unknown" },
    { text: "It's not whether you get knocked down, it's whether you get up.",
        author: "Vince Lombardi" }, 
    ];

    getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[randomIndex];
    }

    getAllQuotes() {
        return this.quotes;
    }

    addQuote(quote: { text: string; author: string }) {
        this.quotes.push(quote);
    }
}
