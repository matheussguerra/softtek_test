import ICreateEntryDTO from "dtos/ICreantEntryDTO";
import Entry from "models/Entry";

export default interface IEntriesRepository {
  create({ value, operation }: ICreateEntryDTO): Entry;
  list(): Entry[];
}
