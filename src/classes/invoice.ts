import { HasFormatter } from './../interfaces/HasFormatter';

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    public details: string,
    private amount: number
  ) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
