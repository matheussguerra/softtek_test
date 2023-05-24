import { Router } from "express";
import entriesRouter from "./entries.routes";

const routes = Router();

routes.use("/entry", entriesRouter);

export default routes;
