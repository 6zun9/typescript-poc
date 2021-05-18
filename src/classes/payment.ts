import { HasFormatter } from './../interfaces/HasFormatter';

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    public details: string,
    private amount: number
  ) {
    this.recipient = recipient;
    this.details = details;
    this.amount = amount;
  }

  format(): string {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
