import express from "express";

import projectRouter from "./routes/project";

const app = express();
const port = 4000;

app.get("/", (_, res) => {
  res.send('Test123!');
});

app.use("/project", projectRouter);

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
