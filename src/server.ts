import express, { Application, Request, Response, NextFunction } from "express";
import path from "path";
import logger from "./middleware/logger";
const app: Application = express();

// Use logger Middleware
app.use(logger);

// Bodyparser Middleware
app.use(express.json());

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5025;

app.listen(port, () => console.log(`Server started on port ${port}`));