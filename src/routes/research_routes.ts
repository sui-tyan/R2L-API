import { uploadResearch } from "@controllers/research_controller";
import { isAuth } from "@utils/isAuth";
import { Router } from "express";

const router = Router();

router.post("/upload", isAuth, uploadResearch);

export default router;
