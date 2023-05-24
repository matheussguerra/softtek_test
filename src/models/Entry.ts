import { uuid } from "uuidv4";

class Entry {
  id: string;
  value: number;
  operation: string;
  date: Date;

  constructor({ value, operation }: Omit<Entry, "id" | "date">) {
    this.id = uuid();
    this.value = value;
    this.operation = operation;
    this.date = new Date();
  }
}

export default Entry;
