import { Request, Response, Router } from "express";

const router = Router();

router.get("/health-check", (req: Request, res: Response) => {
  console.log(req.session.user);
  res.sendStatus(200);
});

export default router;
