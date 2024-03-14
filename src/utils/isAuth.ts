import { NextFunction, Response, Request } from "express";

interface UserSession {
  id: string;
}

declare module "express-session" {
  interface SessionData {
    user: UserSession;
  }
}

function isAuth(req: Request, res: Response, next: NextFunction) {
  try {
    req.session.user ? next() : res.sendStatus(401);
  } catch (err) {
    console.error((err as Error).message);
  }
}

export { isAuth };
