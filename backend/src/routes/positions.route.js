import { Router } from "express";
import { getAllPositions } from "../controllers/positions.controller";

const positionsRouter = Router();

positionsRouter.route("/all").get(getAllPositions);

export default positionsRouter;
