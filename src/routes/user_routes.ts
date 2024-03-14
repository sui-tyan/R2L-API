import { authenticate, deauthenticate } from "@controllers/user_controller";
import { isAuth } from "@utils/isAuth";
import { Router } from "express";

const router: Router = Router();

router.post("/authenticate", authenticate);
router.get("/deauthenticate", isAuth, deauthenticate);

export default router;
