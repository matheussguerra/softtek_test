import Entry from "models/Entry";
import IEntriesRepository from "repositories/IEntriesRepository";

interface IRequest {
  value: number;
  operation: string;
}

class CreateEntryService {
  constructor(private entriesRepository: IEntriesRepository) {}

  public execute({ value, operation }: IRequest): Entry {
    if (!(value || operation)) {
      throw Error("Faltam dados");
    }
    if (value <= 0) {
      throw Error("Lançamento negativo");
    }

    const entry = this.entriesRepository.create({ value, operation });

    return entry;
  }
}

export default CreateEntryService;
