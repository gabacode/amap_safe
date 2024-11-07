import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 4000;
const TARGET_URL = "https://app.amapsottopassi.it/getSottopassi.txt";

const corsOptions = {
  origin: "http://amap_fe:5173",
};

app.use(cors(corsOptions));

app.get("/data", async (req, res) => {
  try {
    const response = await fetch(TARGET_URL);
    const data = await response.text();
    res.setHeader("Cache-Control", "s-maxage=86400");
    res.send(data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(PORT, () => {
  console.log("Proxy running...");
});
