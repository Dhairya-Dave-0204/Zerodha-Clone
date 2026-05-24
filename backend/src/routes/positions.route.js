import { Router } from "express";
import { getAllPositions } from "../controllers/positions.controller.js";

const positionsRouter = Router();

positionsRouter.route("/all").get(getAllPositions);

export default positionsRouter;
