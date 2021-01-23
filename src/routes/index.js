import { Router } from "express";
import UserController from "../controllers/UserController";
import ScrappingController from "../controllers/ScrappingController";

import {
	isAuthenticated,
	isNotAuthenticated,
	authenticateLogin,
	authenticateRegister,
} from "../config/auth";

const router = Router();

router.get("/", UserController.getIndex);
router.get("/about", UserController.getAbout);
router.get("/contact", UserController.getContact);

router.get("/login", isNotAuthenticated, UserController.getLogin);
router.get("/register", isNotAuthenticated, UserController.getRegister);
router.get("/logout", UserController.getLogout);

router.get("/auth", isAuthenticated, UserController.getAuth);

router.post("/register", authenticateRegister);
router.post("/login", authenticateLogin);
router.post("", ScrappingController.onScrapping);

export default router;
