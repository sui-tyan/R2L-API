import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

interface UserCredential {
  username: string;
  password: string;
}

interface UserSession {
  id: string;
}

declare module 'express-session' {
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

async function register(req: Request, res: Response) {
  const { username, password }: UserCredential = req.body;
  // bcrypt.genSalt(10, (err, salt) => {
  //   bcrypt.hash(password, salt, (err, hash) => {
  //     console.log(hash);
  //   });
  // });

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // TODO: Save hash and username to DB
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

export { authenticate, deauthenticate, register };
