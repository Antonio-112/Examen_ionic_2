import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';
import { SQLiteConnection, CapacitorSQLite, SQLiteDBConnection } from '@capacitor-community/sqlite';

export interface Quote {
  text: string;
  author: string;
}

@Injectable({ providedIn: 'root' })
export class QuoteService {
  private readonly defaultQuotes: Quote[] = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "You learn more from failure than from success. Don't let it stop you . Failure builds character.", author: "Unknown" },
    { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  ];

  private quotesSubject = new BehaviorSubject<Quote[]>([]);
  readonly quotes$ = this.quotesSubject.asObservable();

  private sqlite = new SQLiteConnection(CapacitorSQLite);
  private db?: SQLiteDBConnection;
  private readonly PREF_KEY = 'quotes_store';
  private ready: Promise<void>;

  constructor() {
    this.ready = this.init();
  }

  private async init(): Promise<void> {
    // Try SQLite first; fallback to Preferences if unavailable or on error
    try {
      if (Capacitor.isNativePlatform()) {
        await this.initSQLite();
        return;
      }
    } catch (_) {
      // ignore and fallback
    }
    await this.loadFromPreferences();
  }

  private async initSQLite(): Promise<void> {
    this.db = await this.sqlite.createConnection('quotes_db', false, 'no-encryption', 1, false);
    await this.db.open();
    await this.db.execute(`CREATE TABLE IF NOT EXISTS quotes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT NOT NULL,
      author TEXT NOT NULL
    );`);

    const res = await this.db.query('SELECT text, author FROM quotes');
    if (res.values && res.values.length > 0) {
      const loaded = res.values.map((v: any) => ({ text: v.text, author: v.author } as Quote));
      this.quotesSubject.next(loaded);
    } else {
      // Seed defaults
      for (const q of this.defaultQuotes) {
        await this.db.run('INSERT INTO quotes (text, author) VALUES (?, ?);', [q.text, q.author]);
      }
      this.quotesSubject.next([...this.defaultQuotes]);
    }
  }

  private async loadFromPreferences(): Promise<void> {
    const { value } = await Preferences.get({ key: this.PREF_KEY });
    if (value) {
      try {
        const arr = JSON.parse(value) as Quote[];
        this.quotesSubject.next(arr);
        return;
      } catch {
        // fallthrough to seed
      }
    }
    // Seed defaults
    this.quotesSubject.next([...this.defaultQuotes]);
    await Preferences.set({ key: this.PREF_KEY, value: JSON.stringify(this.defaultQuotes) });
  }

  getRandomQuote(): Quote | null {
    const data = this.quotesSubject.value;
    if (!data.length) return null;
    const randomIndex = Math.floor(Math.random() * data.length);
    return { ...data[randomIndex] };
  }

  getAllQuotes(): ReadonlyArray<Quote> {
    return this.quotesSubject.value.map(q => ({ ...q }));
  }

  async addQuote(quote: Quote): Promise<void> {
    await this.ready;
    const newQuote = { ...quote };
    if (this.db) {
      await this.db.run('INSERT INTO quotes (text, author) VALUES (?, ?);', [newQuote.text, newQuote.author]);
      this.quotesSubject.next([...this.quotesSubject.value, newQuote]);
    } else {
      const next = [...this.quotesSubject.value, newQuote];
      this.quotesSubject.next(next);
      await Preferences.set({ key: this.PREF_KEY, value: JSON.stringify(next) });
    }
  }

  async removeQuote(quote: Quote): Promise<void> {
    await this.ready;
    if (this.db) {
      await this.db.run('DELETE FROM quotes WHERE text = ? AND author = ?;', [quote.text, quote.author]);
      const next = this.quotesSubject.value.filter(q => q.text !== quote.text || q.author !== quote.author);
      this.quotesSubject.next(next);
    } else {
      const next = this.quotesSubject.value.filter(q => q.text !== quote.text || q.author !== quote.author);
      this.quotesSubject.next(next);
      await Preferences.set({ key: this.PREF_KEY, value: JSON.stringify(next) });
    }
  }
}
