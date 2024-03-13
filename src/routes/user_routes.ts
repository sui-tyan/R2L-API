import { authenticate } from "@controllers/user_controller";
import { isAuth } from "@utils/isAuth";
import { Router } from "express";

const router: Router = Router();

router.post("/authenticate", isAuth, authenticate);

export default router;
