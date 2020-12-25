import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from 'cors';

import CodesRoutes from "./routes/codes.routes";


const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
const corsOptions = {};
app.use(cors(corsOptions))
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application" });
});

app.use(process.env.API, CodesRoutes);

export default app;
