import ICreateEntryDTO from "dtos/ICreantEntryDTO";
import Entry from "models/Entry";
import IEntriesRepository from "./IEntriesRepository";

class EntriesRepository implements IEntriesRepository {
  private entries: Entry[];

  constructor() {
    this.entries = [];
  }

  public create({ value, operation }: ICreateEntryDTO): Entry {
    const entry = new Entry({ value, operation });

    this.entries.push(entry);

    return entry;
  }

  public list(): Entry[] {
    return this.entries;
  }
}

export default EntriesRepository;
