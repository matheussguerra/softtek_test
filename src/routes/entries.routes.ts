import { Router } from "express";
import EntriesRepository from "repositories/EntriesRepository";
import CreateEntryService from "services/CreateEntryService";
import ShowReportService from "services/ShowReportService";

const entriesRouter = Router();

const entriesRepository = new EntriesRepository();

entriesRouter.post("/", (request, response) => {
  try {
    const { value, operation } = request.body;

    const createEntry = new CreateEntryService(entriesRepository);

    const entry = createEntry.execute({ value, operation });

    return response.status(200).json(entry);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).json({ error: error.message });
    } else {
      return response.status(500).json({ error: "Erro desconhecido." });
    }
  }
});

entriesRouter.get("/", (request, response) => {
  const reports = new ShowReportService(entriesRepository);

  const showReport = reports.execute();

  return response.status(200).json(showReport);
});

entriesRouter.get("/list", (request, response) => {
  const entries = entriesRepository.list();

  return response.status(200).json(entries);
});

export default entriesRouter;
