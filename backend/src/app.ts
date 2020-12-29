import express from "express";

import projectRouter from "./routes/project";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (_, res) => {
  res.send('Test123!');
});

app.use("/project", projectRouter);

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
