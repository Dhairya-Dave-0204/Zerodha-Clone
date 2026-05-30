import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js"
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  refreshAccessToken,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.route("/register").post(registerUser)
userRouter.route("/login").post(loginUser)

userRouter.route("/logout").post(verifyJWT, logoutUser)
userRouter.route("/current-user").get(verifyJWT, getCurrentUser)
userRouter.route("/refresh-token").post(refreshAccessToken)

export default userRouter;
