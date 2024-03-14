import { Request, Response } from "express";

interface UserCredential {
  username: string;
  password: string;
}

interface UserSession {
  id: string;
}

declare module "express-session" {
  interface SessionData {
    user: UserSession;
  }
}

function authenticate(req: Request, res: Response) {
  const { username, password }: UserCredential = req.body;
  req.session.user = {
    id: username,
  };
  console.log(req.session);
  res.send(username);
}

function deauthenticate(req: Request, res: Response) {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
}

export { authenticate, deauthenticate };
