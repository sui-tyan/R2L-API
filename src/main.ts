import express, { Application } from "express";
import user_routes from "@routes/user_routes";
import research_routes from "@routes/research_routes";
import health_check from "@utils/health";
import session from "express-session";
import { existsSync, mkdirSync } from "fs";

if (!existsSync("./src/uploads/")) {
  mkdirSync("./src/uploads/");
}

const app: Application = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY: string = process.env.SECRET_KEY!;

app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 604800000 },
  })
);
app.use(express.json());
app.use(health_check);
app.use("/users", user_routes);
app.use("/research", research_routes);

app.listen(PORT, () => {
  console.log(`API Running on PORT ${PORT}`);
});
