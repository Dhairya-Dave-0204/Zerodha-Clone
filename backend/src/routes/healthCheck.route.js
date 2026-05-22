import { Router } from "express";
import { healthCheck } from "../controllers/healthCheck.controller.js"

const healthRouter = Router()

healthRouter.route("/").get(healthCheck)

export default healthRouter