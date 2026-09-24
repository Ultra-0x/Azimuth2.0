import app from "./app.js";
import { env } from "./config/env.js";

app.listen(env.PORT, () => {
  console.log(`Azimuth 2.0 API listening on port ${env.PORT}`);
});