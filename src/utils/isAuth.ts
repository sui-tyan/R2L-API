import { NextFunction, Response, Request } from "express";

function isAuth(req: Request, res: Response, next: NextFunction) {
  req.session.user ? next() : res.sendStatus(401);
}

export { isAuth };
