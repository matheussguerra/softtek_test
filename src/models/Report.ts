class Report {
  date: string;
  totalValue: number;
  entriesQuantity: number;

  constructor({ date, totalValue, entriesQuantity }: Report) {
    this.date = date;
    this.totalValue = totalValue;
    this.entriesQuantity = entriesQuantity;
  }
}

export default Report;
