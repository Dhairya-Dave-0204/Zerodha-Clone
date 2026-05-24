import { Router } from "express";
import { getAllHoldings } from "../controllers/holdings.controller.js";

const holdingsRouter = Router();

holdingsRouter.route("/all").get(getAllHoldings)

export default holdingsRouter