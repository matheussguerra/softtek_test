import Report from "models/Report";
import IEntriesRepository from "repositories/IEntriesRepository";

class ShowReportService {
  constructor(private entriesRepository: IEntriesRepository) {}

  public execute(): Report {
    const entries = this.entriesRepository.list();
    const today = new Date();

    const datesAreOnSameDay = (first: Date, second: Date) =>
      first.getFullYear() === second.getFullYear() &&
      first.getMonth() === second.getMonth() &&
      first.getDate() === second.getDate();

    var result: number = 0;

    entries.forEach((entry) => {
      if (datesAreOnSameDay(entry.date, today)) {
        switch (entry.operation) {
          case "C": {
            result += entry.value;
            break;
          }

          case "D": {
            result -= entry.value;
            break;
          }
        }
      }
    });
    return new Report({
      date: today.toUTCString(),
      entriesQuantity: entries.length,
      totalValue: result,
    });
  }
}

export default ShowReportService;
